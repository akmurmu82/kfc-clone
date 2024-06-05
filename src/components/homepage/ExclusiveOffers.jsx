import Slider from "react-slick";
import { Box, Center, Flex, Link, Text, Button, Image } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import "./carousel.css"; // Import the custom CSS
import CustomPaginationBars from "./CustomPaginationBars"; // Import the custom bars component
import { useState } from "react";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <Button
      position="absolute"
      top="50%"
      right="10px"
      borderRadius={"40%"}
      transform="translateY(-50%)"
      bg="white"
      color="black"
      zIndex="1"
      onClick={onClick}
    >
      <ArrowForwardIcon />
    </Button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Button
      position="absolute"
      borderRadius={"40%"}
      top="50%"
      left="10px"
      transform="translateY(-50%)"
      bg="white"
      color="black"
      zIndex="1"
      onClick={onClick}
    >
      <ArrowBackIcon />
    </Button>
  );
}

function ExclusiveOffers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    lazyLoad: "ondemand", // Enable lazy loading
  };

  function Slide({ index }) {
    return (
      <Box bg={"#fff"} borderRadius={"10px"} overflow={"hidden"}>
        <Image
          src="https://img.gs/dwgqsddfwb/full/https://i.postimg.cc/XvTkL0qC/CHKZINGER.jpg"
          alt="Offer 1"
          width="100%"
        />
        <Center justifyContent={"space-between"} p={5}>
          <Link textDecoration={"none"}>View Details</Link>
          <Button
            borderRadius={"50px"}
            border="1px solid"
            p={5}
            _hover={{ bg: "#242424", color: "#fff" }}
          >
            Apply Offer {index}
          </Button>
        </Center>
      </Box>
    );
  }

  const totalSlides = 3; // Number of slides you have

  return (
    <Center p={"50"}>
      <Box width="100%" maxWidth="1080px">
        <Flex align="center" justifyContent="space-between" mb={8}>
          <Text color="white" fontWeight="bold" fontSize="3xl">
            EXCLUSIVE OFFERS FOR YOU
          </Text>
          <Link color="white">View All Deals</Link>
        </Flex>

        <Box width="100%" position="relative">
          <Slider {...settings}>
            {[...Array(totalSlides)].map((_, index) => (
              <Slide key={index} index={index} />
            ))}
          </Slider>
          <CustomPaginationBars
            currentSlide={currentSlide}
            totalSlides={totalSlides}
          />
        </Box>
      </Box>
    </Center>
  );
}

export default ExclusiveOffers;
