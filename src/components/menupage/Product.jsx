import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { addToCart } from "../../services/cartServices";
import AddButton from "./AddButton";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slices/cartSlice";

function ProductCard({ image, title, price, desc, id, userId }) {
  const toast = useToast();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = async (quantity) => {
    try {
      const response = await addToCart(userId, id, quantity, price);

      if (response.status) {
        console.log(`${title} has been added to ${userId}'s cart.`);
        setQuantity((prev) => prev + quantity);
        dispatch(addItemToCart({ productId: id, quantity: 1, price }));
        toast({
          title: "Added to Cart",
          description: `${title} has been added to your cart.`,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      console.log("error: ", error);
      toast({
        title: "Error",
        description: "There was an error adding the item to the cart.",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
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
          <AddButton title="Add to Cart" onClick={() => handleAddToCart(1)} />
        ) : (
          <HStack>
            <Button
              borderRadius={"20px"}
              bg={"#e4002b"}
              p={2}
              color={"#fff"}
              isDisabled={quantity == 0}
              onClick={() => handleAddToCart(-1)}
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
              onClick={() => handleAddToCart(1)}
            >
              +
            </Button>
          </HStack>
        )}
      </Box>
    </Box>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  userId: PropTypes.string,
};

export default ProductCard;
