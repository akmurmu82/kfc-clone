import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Text,
  Input,
  useToast,
  VStack,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function ProfileBuilder({ navigate }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleProfileSubmit = () => {
    // Here you can send the profile data to the backend if needed
    toast({
      title: "Profile Saved.",
      description: "Your profile has been updated.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Redirect to home page
    navigate("/");
  };

  const handleSkip = () => {
    toast({
      title: "Skipped.",
      description: "You can update your profile later.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
    // Redirect to home page
    navigate("/");
  };

  return (
    <Box>
      <Box mb="4">
        <Text fontSize="xl" fontWeight="bold">
          WELCOME,
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          THANK YOU FOR BEING WITH US!
        </Text>
        <Text marginTop="10px">Please let us know you more.</Text>
      </Box>
      <FormControl id="first-name" mb="4">
        <Input
          type="text"
          value={firstName}
          rounded={false}
          outline={"none"}
          border={"none"}
          borderBottom={"1px solid"}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />
      </FormControl>
      <FormControl id="email" mb="4">
        <Input
          type="email"
          value={email}
          rounded={false}
          outline={"none"}
          border={"none"}
          borderBottom={"1px solid"}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </FormControl>
      <VStack m={50}>
        <Button
          bg={"#e4002b"}
          color="#fff"
          border="none"
          _hover={{ bg: "rgb(200,0,43)" }}
          onClick={handleProfileSubmit}
          borderRadius={50}
          p={"0 30px"}
        >
          Save
        </Button>
        <Box position="relative" padding="5">
          <Divider h={"1px"} />
          <AbsoluteCenter bg="white" px="4">
            or
          </AbsoluteCenter>
        </Box>

        <Button
          borderRadius={50}
          p={"0 30px"}
          variant={"outline"}
          _hover={{ bg: "#181818", color: "#fff" }}
          onClick={handleSkip}
        >
          Skip
        </Button>
      </VStack>
    </Box>
  );
}

ProfileBuilder.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default ProfileBuilder;
