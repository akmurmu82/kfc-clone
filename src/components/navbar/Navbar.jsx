import { Flex, Text, Image, Divider, Box } from "@chakra-ui/react";
import { ImUserTie } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";

function Navbar() {
  function Menu(prop) {
    return <Text fontWeight={"bold"}>{prop.title}</Text>;
  }
  const menus = [{ title: "Menu" }, { title: "Deals" }];
  return (
    <>
      <Flex
        p={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5px"}
        fontSize={"14px"}
      >
        <FaLocationDot color="#e4002b" />
        <Text>Allow location access for local store menu and promos</Text>
        <Box
          style={{
            padding: "5px 10px",
            backgroundColor: "#181818",
            color: "#fff",
            border: "1px solid",
            borderRadius: "17px",
          }}
        >
          Set Location
        </Box>
      </Flex>
      <Flex
        p={{ lg: "30px 150px" }}
        justifyContent={"space-between"}
        w={"100vw"}
        h={"100px"}
        border={"1px solid #f3f3f3"}
      >
        <Flex
          // border="1px solid"
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"250px"}
        >
          <Image
            h={"100%"}
            src="https://www.logolynx.com/images/logolynx/29/29e74482894d58dad8917a1c228d6941.jpeg"
          />
          {menus.map((menu, ind) => (
            <Menu key={ind} title={menu.title} />
          ))}
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"170px"}
          // border="1px solid"
        >
          <ImUserTie />
          <Text fontWeight={"bold"}>Sign Up</Text>
          <Divider orientation="vertical" />
          <Text>₹0</Text>

          <Image
            h={"100%"}
            src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
          />
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
