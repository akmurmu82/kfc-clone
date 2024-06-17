import { Box, Flex, Text } from "@chakra-ui/react";
import { TbCirclePercentage } from "react-icons/tb";

function CheckoutBox() {
  return (
    <Box
      borderRadius={5}
      p={5}
      border={"1px solid"}
      w={"30%"}
      textAlign={"left"}
    >
      <Text fontSize={"2xl"} fontWeight={"bolder"}>
        3 Items
      </Text>
      <Flex
        border={"1px solid"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderRadius={10}
        bg="#f6f6f6"
        p={"10px"}
      >
        <Flex alignItems={"center"} color={"#e4002b"} fontSize={"sm"}>
          <TbCirclePercentage fontSize={15} />
          Apply
        </Flex>
        <Text
          borderRadius={10}
          fontSize={"10px"}
          p={"2px 10px"}
          bg="#fff"
          border={"1px solid"}
        >
          View All
        </Text>
      </Flex>
      <Flex>
        <Text>Subtotal</Text>
        <Text></Text>
      </Flex>
    </Box>
  );
}

export default CheckoutBox;
