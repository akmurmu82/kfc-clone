import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  const CustomLink = (props) => (
    <Link
      {...props}
      textDecoration="none"
      color="#d3d3d3"
      _hover={{ color: "#fff" }}
    />
  );

  return (
    <Box bg={"#1a2224"} color="white" pt={150} pl={100} pr={100} pb={5}>
      <Flex justifyContent="space-around">
        <Box>
          <Image
            src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
            alt="KFC Logo"
          />
        </Box>
        <Box ml={[0, 8]}>
          <Table p={0} variant={"unstyled"} size="sm">
            <Thead>
              <Tr>
                <Td>Legal</Td>
                <Td>KFC India</Td>
                <Td>KFC Food</Td>
                <Td>Support</Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <CustomLink href="#">Terms and Conditions</CustomLink>
                </Td>
                <Td>
                  <CustomLink href="#">About KFC India</CustomLink>
                </Td>
                <Td>
                  <CustomLink href="#">Menu</CustomLink>
                </Td>
                <Td>
                  <CustomLink href="#">Get Help</CustomLink>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <CustomLink href="#">Privacy Policy</CustomLink>
                </Td>
                <Td>
                  <CustomLink href="#">KFC Care</CustomLink>
                </Td>
                <Td>
                  <CustomLink href="#">Order LookUp</CustomLink>
                </Td>
                <Td>
                  <CustomLink href="#">Contact Us</CustomLink>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <CustomLink href="#">Disclaimer</CustomLink>
                </Td>
                <Td>
                  <CustomLink href="#">Career</CustomLink>
                </Td>
                <Td>
                  <CustomLink href="#">Gift Card</CustomLink>
                </Td>
                <Td>
                  <CustomLink href="#">KFC Feedback</CustomLink>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <CustomLink href="#">Caution Notice</CustomLink>
                </Td>
                <Td>
                  <CustomLink href="#">Our Golden Past</CustomLink>
                </Td>
                <Td>
                  <CustomLink href="#">Nutrition & Allergen</CustomLink>
                </Td>
                <Td>
                  <CustomLink href="#">Privacy Policy</CustomLink>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <HStack h="fit-content">
          <FaLocationDot color="#e4002b" />
          <Text fontSize={14}>Find a KFC</Text>
        </HStack>
        <Box>
          <Image
            cursor="pointer"
            src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
            alt="Google Play Store"
          />
        </Box>
        <Box>
          <Image
            cursor="pointer"
            src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
            alt="Apple App Store"
          />
        </Box>
      </Flex>
      <Flex mt={50} justifyContent={"space-between"}>
        <Text>&copy; 2024 KFC Clone. All rights reserved.</Text>
        <HStack>
          <Image
            cursor="pointer"
            src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg"
            alt="Instagram"
          />
          <Image
            cursor="pointer"
            src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg"
            alt="Facebook"
          />
          <Image
            cursor="pointer"
            src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg"
            alt="Twitter"
          />
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;
