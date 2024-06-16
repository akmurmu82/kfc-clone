import { Image, Text, Button, Flex, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
// import PropTypes from "prop-types";

function CartProduct({ image, name, quantity, price }) {
  //   const [quantity, setQuantity] = useState(0);
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="5"
      bg="white"
    >
      <Image src={image} alt={name} boxSize="150px" objectFit="cover" mb="3" />
      <Text fontSize="xl" fontWeight="semibold" mb="3">
        {name}
      </Text>
      <Flex alignItems="center" justifyContent="space-between">
        <Button colorScheme="red">Remove</Button>
        <Flex alignItems="center">
          <IconButton
            icon={<MinusIcon />}
            size="sm"
            variant="outline"
            colorScheme="gray"
            mr="2"
          />
          <Text fontSize="lg">{quantity}</Text>
          <IconButton
            icon={<AddIcon />}
            size="sm"
            variant="outline"
            colorScheme="gray"
            ml="2"
          />
        </Flex>

        <Text fontSize="lg" fontWeight="bold">
          ₹{price.toFixed(2)}
        </Text>
      </Flex>
    </Flex>
  );

  //   const productData = {
  //     name: "Mexican Zinger Pro Burger",
  //     image: "path/to/image.jpg", // Replace with the actual image path
  //     quantity: 1,
  //     price: 219.04,
  //   };
}
// CartProduct.propTypes = {
//   image: PropTypes.string.required,
//   name: PropTypes.string.required,
//   price: PropTypes.number.required,
//   quantity: PropTypes.number.required,
// };

export default CartProduct;
