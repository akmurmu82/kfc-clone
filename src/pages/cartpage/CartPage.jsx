import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CartProduct from "../../components/cartpage/CartProduct";
import { fetchProductDetails } from "../../services/cartServices";
import { useEffect, useState } from "react";

function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const [cartArr, setCartArr] = useState([]);
  console.log(cart);

  async function getCartDetails(cart) {
    const detailedCartItems = await Promise.all(
      cart.map(async (item) => {
        const productDetails = await fetchProductDetails(item.productId);
        let product = productDetails[0]; // maa chud gyi isko discover karte karte
        return {
          ...item,
          ...product,
        };
      })
    );
    return detailedCartItems;
  }

  useEffect(() => {
    const genCartDetails = async () => {
      const cartArr = await getCartDetails(cart);
      console.log("cartArr:", cartArr);
      setCartArr(cartArr);
    };
    genCartDetails();
  }, []);

  return (
    <Box>
      <Text>CART</Text>
      <Flex>
        <VStack>
          {cartArr.map(({ image, name, quantity, price }, index) => (
            <CartProduct
              key={index}
              name={name}
              image={image}
              price={price}
              quantity={quantity}
            />
          ))}
        </VStack>
      </Flex>
    </Box>
  );
}

export default CartPage;
