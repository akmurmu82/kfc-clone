import { Box, HStack } from "@chakra-ui/react";

const CustomPaginationBars = ({ currentSlide, totalSlides }) => {
  return (
    <HStack
      spacing={2}
    //   position="absolute"
      mt="10px"
      width="100%"
      justify="center"
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <Box
          key={index}
          width={currentSlide === index ? "20px" : "10px"}
          height="10px"
          bg={currentSlide === index ? "white" : "gray.400"}
          transition="all 0.3s ease"
        />
      ))}
    </HStack>
  );
};

export default CustomPaginationBars;
