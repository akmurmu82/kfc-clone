import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useToast,
  HStack,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

const BE_BASE_URL = `https://be-kfc.onrender.com`;

function Category({ title, products, userId }) {
  // console.log(products);
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
      ,htjiy
      <SimpleGrid columns={[1, 2]} gap={5}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.name}
            price={product.price}
            desc={product.desc}
            id={product._id}
            userId={userId}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  userId: PropTypes.number,
};

function ProductCard({ image, title, price, desc, id, userId }) {
  const toast = useToast();
  const [quantity, setQuantity] = useState(0);

  const addToCart = async () => {
    try {
      const response = await axios.post(`${BE_BASE_URL}/cart/add`, {
        productId: id,
        quantity: 1,
        userId,
      });

      if (response.status) {
        console.log(`${title} has been added to ${userId}'s cart.`);
        setQuantity(1);
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

  const updateCartQuantity = async (newQuantity) => {
    try {
      let response = await axios.get(`${BE_BASE_URL}/cart/get`, {
        userId,
      });
      console.log("cart:", response.data);
      setQuantity(newQuantity);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error updating the quantity",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("There was an error updating the quantity", error);
    }
  };

  return (
    <Box cursor={"pointer"} overflow="hidden">
      <Image src={image} borderRadius="md" alt={title} />
      <Box mt={2} p={3}>
        <Text fontWeight="bold" fontSize="lg">
          {title}
        </Text>
        <Text fontWeight="bold" fontSize="md">
          ₹{price}
        </Text>
        <Text fontSize="sm" mb={3}>
          {desc}
        </Text>
        {quantity === 0 ? (
          <AddButton title="Add to Cart" onClick={addToCart} />
        ) : (
          <HStack>
            <Button
              borderRadius={"20px"}
              bg={"#e4002b"}
              p={2}
              color={"#fff"}
              isDisabled={quantity == 1}
              onClick={() => updateCartQuantity(quantity - 1)}
            >
              -
            </Button>
            <Input
              value={quantity}
              isReadOnly
              width="50px"
              border={"none"}
              textAlign={"center"}
            />
            <Button
              borderRadius={"20px"}
              bg={"#e4002b"}
              p={2}
              color={"#fff"}
              onClick={() => updateCartQuantity(quantity + 1)}
            >
              +
            </Button>
          </HStack>
        )}
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
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  userId: PropTypes.number,
};

export default Category;
