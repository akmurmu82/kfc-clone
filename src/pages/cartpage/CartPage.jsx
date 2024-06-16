import { Box, Flex, Text, VStack, Image, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "../../components/cartpage/CartProduct";
import { getCartDetails } from "../../services/cartServices";
import { useEffect, useState } from "react";
import { removeItemFromCart } from "../../redux/slices/cartSlice";
import CheckoutBox from "../../components/cartpage/CheckoutBox";

function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const [cartArr, setCartArr] = useState([]);
  const dispatch = useDispatch();

  const handleRemoveItemFromCart = (productId) => {
    dispatch(removeItemFromCart({ productId }));
  };

  useEffect(() => {
    const genCartDetails = async () => {
      const cartArr = await getCartDetails(cart); // this will genrate cartArr with detailed products info
      console.log("cartArr:", cartArr);
      setCartArr(cartArr);
    };
    genCartDetails();
  }, [cart]);

  return (
    <Flex
      p="50px"
      w={"100%"}
      justifyContent={"space-between"}
      border="1px solid"
    >
      {cart.length === 0 ? (
        <Flex
          pl="100px"
          bg="#f7f7f7"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box textAlign="left">
            <Text fontSize={40}>YOUR CART IS EMPTY.</Text>
            <Text fontSize={40}>LET&apos;S START AN ORDER!</Text>
            <Link to="/menu">
              <Button
                mt="20px"
                p="20px 40px"
                bg="#e4002b"
                color="#fff"
                borderRadius="50px"
                border="none"
                _hover={{ opacity: 0.9 }}
              >
                Start Order
              </Button>
            </Link>
          </Box>
          <Image src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png" />
        </Flex>
      ) : (
        <VStack w={"60%"}>
          {cartArr.map(({ image, productId, name, quantity, price }, index) => (
            <CartProduct
              key={index}
              name={name}
              productId={productId}
              image={image}
              price={price}
              quantity={quantity}
              removeFunc={() => handleRemoveItemFromCart(productId)}
            />
          ))}
        </VStack>
      )}
      <CheckoutBox />
    </Flex>
  );
}

export default CartPage;
