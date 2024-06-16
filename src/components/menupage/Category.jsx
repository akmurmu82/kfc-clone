import { SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ProductCard from "./Product";
import PropTypes from "prop-types";

function Category({ title, products, userId }) {
  // console.log(products);
  return (
    <VStack
      p={"20px"}
      bg={"#f3f3f3"}
      borderRadius={"8px"}
      alignItems={"flex-start"}
      textAlign={"left"}
    >
      <Text textAlign={"left"} m={5} fontSize={"25px"} fontWeight={"bold"}>
        {title}
      </Text>
      <SimpleGrid columns={[1, 2]} gap={5}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.name}
            price={product.price}
            desc={product.desc}
            id={product._id}
            userId={userId}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  userId: PropTypes.string,
};

export default Category;
