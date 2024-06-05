import { Box, Divider, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

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

function BrowseCategory() {
  return (
    <Box p={100} bg={"#fff"}>
      <Box position="relative" mb={8}>
        <Flex align="center">
          <Text bg="white" fontWeight="bold" fontSize="3xl">
            BROWSE CATEGORIES
          </Text>
          <Box flex="1" ml="4">
            <Divider orientation="horizontal" />
          </Box>
        </Flex>
      </Box>

      <SimpleGrid columns={[1, null, 2, 4]} spacing={8}>
        <ProductCard
          image={
            "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=44.86"
          }
          title="Product 1"
        />
        <ProductCard
          image={
            "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=44.86"
          }
          title="Product 2"
        />
        <ProductCard
          image={
            "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=44.86"
          }
          title="Product 3"
        />
        <ProductCard
          image={
            "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=44.86"
          }
          title="Product 4"
        />
        <ProductCard
          image={
            "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=44.86"
          }
          title="Product 1"
        />
        <ProductCard
          image={
            "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=44.86"
          }
          title="Product 2"
        />
        <ProductCard
          image={
            "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=44.86"
          }
          title="Product 3"
        />
        <ProductCard
          image={
            "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=44.86"
          }
          title="Product 4"
        />
      </SimpleGrid>
    </Box>
  );
}

export default BrowseCategory;
