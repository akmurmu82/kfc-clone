import Slider from "react-slick";
import { Box, Center, Flex, Link, Text, Button, Image } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

function ExclusiveOffers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <Button
        position="absolute"
        top="50%"
        right="10px"
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

  return (
    <Center bg={"#1a2224"} p={"50"}>
      <Box>
        <Flex
          align="center"
          justifyContent={"space-between"}
          w={"1080px"}
          mb={8}
        >
          <Text color="white" fontWeight="bold" fontSize="3xl">
            EXCLUSIVE OFFERS FOR YOU
          </Text>
          <Link color="white">View All Deals</Link>
        </Flex>

        {/* <Box w={"1080px"} position="relative">
          <Slider {...settings}>
            <Box>
              <Image w={"200px"} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=44.86" alt="Offer 1" />
            </Box>
            <Box>
              <Image w={"200px"} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=44.86" alt="Offer 2" />
            </Box>
            <Box>
              <Image w={"200px"} src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/ADDCHK99.jpg?ver=44.86" alt="Offer 3" />
            </Box>
          </Slider>
        </Box> */}
      </Box>
    </Center>
  );
}

export default ExclusiveOffers;
