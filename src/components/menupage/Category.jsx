import { Box, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";

function ProductCard({ image, title }) {
  return (
    <Box
      borderWidth="1px"
      bg={"#f7f7f7"}
      cursor={"pointer"}
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={image} alt={title} />
      <Box mt={2}>
        <Text fontWeight="bold" fontSize="lg" p={3}>
          {title}
        </Text>
      </Box>
    </Box>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

function Category({ title, products }) {
  return (
    <VStack
      p={"20px 50px"}
      bg={"#f3f3f3"}
      borderRadius={"8px"}
      alignItems={"flex-start"}
      textAlign={"left"}
    >
      <Text textAlign={"left"} m={2} fontSize={"larger"} fontWeight={"bold"}>
        {title}
      </Text>
      <SimpleGrid columns={[1, 2]} gap={5}>
        {products.map((_, index) => (
          <ProductCard
            key={index}
            image={
              "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=44.86"
            }
            title="Product 1"
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Category;
