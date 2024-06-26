import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import ProfileBuilder from "./ProfileBuilder";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { getCart } from "../../services/cartServices";
import { setCart } from "../../redux/slices/cartSlice";

const BE_KFC_URL = `https://be-kfc.onrender.com`;

function SignupForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handlePhoneNumberSubmit = async () => {
    try {
      const response = await axios.post(`${BE_KFC_URL}/send-otp`, {
        phoneNumber,
      });
      console.log(response);
      if (response.data.success) {
        setOtpSent(true);
        toast({
          title: "OTP sent.",
          description: "We've sent an OTP to your phone number.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error.",
        description: "Failed to send OTP. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const response = await axios.post(`${BE_KFC_URL}/verify-otp`, {
        phoneNumber,
        otp,
      });
      if (response.data.success) {
        // Registering the user with the phone number
        const res2 = await axios.post(`${BE_KFC_URL}/users/register`, {
          phoneNumber,
        });
        if (res2.data.message == "Email already exists.") {
          let currUser = res2.data.data;
          dispatch(setUser(currUser));
          let res = await getCart(user._id);
          console.log("cart:", res.data);
          dispatch(setCart({ userId: currUser._id, items: res.data }));
          setOtpVerified(true);
          toast({
            title: "Verification successful.",
            description: "Your phone number has been verified.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Verification failed.",
          description: "Incorrect OTP. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error.",
        description: "Failed to verify OTP. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="10">
      {!otpVerified ? (
        <>
          <FormControl id="phone" mb="4">
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
            />
          </FormControl>
          {otpSent && (
            <FormControl id="otp" mb="4">
              <FormLabel>OTP</FormLabel>
              <Input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the OTP"
              />
            </FormControl>
          )}
          {!otpSent ? (
            <Button colorScheme="blue" onClick={handlePhoneNumberSubmit}>
              Send OTP
            </Button>
          ) : (
            <Button colorScheme="green" onClick={handleOtpSubmit}>
              Verify OTP
            </Button>
          )}
        </>
      ) : (
        <ProfileBuilder navigate={navigate} />
      )}
    </Box>
  );
}

export default SignupForm;
