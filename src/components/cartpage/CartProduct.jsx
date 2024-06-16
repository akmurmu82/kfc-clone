import {
  Image,
  Text,
  Flex,
  IconButton,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { updateItemQuantity } from "../../redux/slices/cartSlice";
import PropTypes from "prop-types";
import { useState } from "react";

function CartProduct({ image, name, productId, quantity, price, removeFunc }) {
  const [currQuantity, setCurrQuantity] = useState(quantity);
  const dispatch = useDispatch();
  // const cartArr = useSelector((state) => state.cart.items);

  const handleAddToCart = (quantity) => {
    dispatch(
      updateItemQuantity({ productId, quantity: currQuantity + quantity })
    );
    if (quantity < 0) {
      setCurrQuantity((prev) => prev - 1);
    } else {
      setCurrQuantity((prev) => prev + 1);
    }
  };

  return (
    <Flex
      borderRadius="md"
      overflow="hidden"
      justifyContent={"space-between"}
      p="3"
      w={"100%"}
      bg="#f6f6f6"
    >
      <HStack>
        <Image
          src={image}
          alt={name}
          mr={5}
          boxSize="80px"
          objectFit="cover"
          // mb="3"
        />
        <VStack alignItems={"flex-start"}>
          <Text fontSize="md" fontWeight="thin" mb="3">
            {name}
          </Text>
          <Text
            p={0}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={removeFunc}
          >
            Remove
          </Text>
        </VStack>
      </HStack>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap={2}>
          <IconButton
            borderRadius={"50px"}
            icon={<MinusIcon />}
            size="sm"
            variant="outline"
            colorScheme="gray"
            mr="2"
            onClick={() => handleAddToCart(-1)}
            isDisabled={currQuantity == 1}
          />
          <Text fontSize="lg">{currQuantity}</Text>
          <IconButton
            borderRadius={"50px"}
            icon={<AddIcon />}
            size="sm"
            variant="outline"
            colorScheme="gray"
            ml="2"
            onClick={() => handleAddToCart(1)}
          />
        </Flex>

        <Text ml={5} fontSize="md" fontWeight="thin">
          ₹{(price * currQuantity).toFixed(2)}
        </Text>
      </Flex>
    </Flex>
  );
}
CartProduct.propTypes = {
  image: PropTypes.string.required,
  productId: PropTypes.string.required,
  name: PropTypes.string.required,
  price: PropTypes.number.required,
  quantity: PropTypes.number.required,
  removeFunc: PropTypes.func.required,
};

export default CartProduct;
