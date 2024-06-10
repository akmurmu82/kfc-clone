import { Flex, Text, Image, Divider, Box } from "@chakra-ui/react";
import { ImUserTie } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar() {
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
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"250px"}
        >
          <Image
            h={"100%"}
            src="https://www.logolynx.com/images/logolynx/29/29e74482894d58dad8917a1c228d6941.jpeg"
          />
          {menus.map((menu, ind) => (
            <MenuLink key={ind} title={menu.title} link={menu.link} />
            ))}
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"170px"}
          // border="1px solid"
        >
          <ImUserTie />
          <MenuLink title='Sign Up' link='/signup' />
          <Divider orientation="vertical" />
          <Text>₹0</Text>

          <Image
            h={"100%"}
            src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
