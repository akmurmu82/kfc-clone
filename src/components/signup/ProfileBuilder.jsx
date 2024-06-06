import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";

function ProfileBuilder({ navigate }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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
      <FormControl id="first-name" mb="4">
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />
      </FormControl>
      <FormControl id="last-name" mb="4">
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
        />
      </FormControl>
      <FormControl id="email" mb="4">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleProfileSubmit} mr="4">
        Save
      </Button>
      <Button colorScheme="gray" onClick={handleSkip}>
        Skip
      </Button>
    </Box>
  );
}

export default ProfileBuilder;
