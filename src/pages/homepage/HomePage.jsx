import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import BrowseCategory from "../../components/homepage/BrowseCategory";
import ExclusiveOffers from "../../components/homepage/ExclusiveOffers";

function HomePage() {
  return (
    <Box bg={"#1a2224"}>
      <Center p={3} bg={"#202020"}>
        <Text color={"white"} mr={5}>
          LET&apos;S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        </Text>
        <Button borderRadius={50} p={"0 30px"}>
          Start Order
        </Button>
      </Center>
      <Box>
        <Image src="https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=1366&fit=fill&fm=webp"></Image>
      </Box>
      <BrowseCategory />
      <ExclusiveOffers />
    </Box>
  );
}

export default HomePage;
