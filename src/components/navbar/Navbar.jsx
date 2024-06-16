import { Flex, Text, Image, Divider, Box } from "@chakra-ui/react";
import { ImUserTie } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Navbar() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  console.log("currUser:", user, "currCart:", cart);
  function MenuLink({ link, title }) {
    return (
      <Text fontWeight={"bold"}>
        <RouterLink to={link}>{title}</RouterLink>
      </Text>
    );
  }

  MenuLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  const menus = [
    { title: "Menu", link: "/menu" },
    { title: "Deals", link: "/deals" },
  ];
  return (
    <Box position={"sticky"} bg={"#fff"} top={0} width={"100%"} zIndex={9}>
      <Flex
        p={"10px"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5px"}
        borderBottom={"1px solid #d3d3d3"}
        fontSize={"14px"}
      >
        <FaLocationDot color="#e4002b" />
        <Text>Allow location access for local store menu and promos</Text>
        <Box
          style={{
            padding: "5px 10px",
            backgroundColor: "#181818",
            color: "#fff",

            borderRadius: "17px",
          }}
        >
          Set Location
        </Box>
      </Flex>
      <Flex
        p={{ lg: "30px 130px" }}
        justifyContent={"space-between"}
        h={"100px"}
      >
        <Flex
          justifyContent={"space-around"}
          // border="1px solid red"
          alignItems={"center"}
          w={"250px"}
        >
          <RouterLink
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              height="40px"
              src="https://www.logolynx.com/images/logolynx/29/29e74482894d58dad8917a1c228d6941.jpeg"
            />
          </RouterLink>
          {menus.map((menu, ind) => (
            <MenuLink key={ind} title={menu.title} link={menu.link} />
          ))}
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"fit-content"}
        >
          <Box>
            {user._id == null ? (
              <ImUserTie />
            ) : (
              <Image w={"30px"} src={user.photoURL} />
            )}
          </Box>
          <MenuLink
            title={user._id == null ? "Sign Up" : user.name}
            link="/signup"
          />
          <Divider orientation="vertical" />
          <RouterLink to="/cart">
            <Flex
              // border="1px solid"
              fontSize="20px"
              w="100px"
              _hover={{ textDecoration: "none", color: "#e4002b" }}
              justifyContent="space-between"
              alignItems="center"
              h="100%"
              position="relative"
            >
              ₹
              <Text>
                {Math.floor(
                  cart.items.reduce((acc, { price, quantity }) => {
                    let itemTotalPrice = price * quantity;
                    // console.log(itemTotalPrice);
                    return acc + itemTotalPrice;
                  }, 0)
                )}
              </Text>
              <Box position="relative" w="60%">
                <Image
                  w="100%"
                  src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                />
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontWeight={"bold"}
                  borderRadius="50%"
                  padding="0.25em 0.5em"
                  fontSize="12px"
                >
                  {cart.items.length}
                </Box>
              </Box>
            </Flex>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
