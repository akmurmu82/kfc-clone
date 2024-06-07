import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import PropTypes from "prop-types";

function Category({ title, products }) {
  console.log(products);
  return (
    <VStack
      p={"20px"}
      bg={"#f3f3f3"}
      borderRadius={"8px"}
      alignItems={"flex-start"}
      textAlign={"left"}
    >
      <Text textAlign={"left"} m={5} fontSize={"25px"} fontWeight={"bold"}>
        {title}
      </Text>
      <SimpleGrid columns={[1, 2]} gap={5}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.name}
            price={product.price}
            desc={product.desc}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function ProductCard({ image, title, price, desc, id }) {
  const toast = useToast();

  const addToCart = async () => {
    try {
      const response = await axios.post("http://localhost:3000/cart", {
        id,
        image,
        title,
        price,
        desc,
      });

      if (response.status === 201) {
        toast({
          title: "Added to Cart",
          description: `${title} has been added to your cart.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error adding the item to the cart.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box cursor={"pointer"} overflow="hidden">
      <Image src={image} borderRadius="md" alt={title} />
      <Box mt={2} p={3}>
        <Text fontWeight="bold" fontSize="lg" mb={3}>
          {title}
        </Text>
        <Text fontWeight="bold" fontSize="md" mb={3}>
          {price}
        </Text>
        <Text fontSize="sm" mb={3}>
          {desc}
        </Text>

        <AddButton title="Add to Cart" onClick={addToCart} />
      </Box>
    </Box>
  );
}

function AddButton({ title, onClick }) {
  return (
    <Button
      rightIcon={<AddIcon />}
      borderRadius={50}
      bg={"#e4002b"}
      fontSize={"small"}
      _hover={{ opacity: 0.9 }}
      border={"none"}
      color={"#fff"}
      variant="solid"
      outline={"none"}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}

AddButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Category;
