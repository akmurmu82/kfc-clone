import {
  Button,
  Center,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import SidePanel from "../../components/menupage/SidePanel";
import Category from "../../components/menupage/Category";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";

const BE_BASE_URL = `https://be-kfc.onrender.com`;

function MenuPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const productsArr = useSelector((state) => state.productsArr);
  const [currentCategory, setCurrentCategory] = useState("");
  const categoryRefs = useRef({});

  const products = [
    "INTERNATIONAL BURGER FEST",
    "MATCH DAY COMBOS",
    "VALUE LUNCH SPECIALS",
    "BOX MEALS",
  ];

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get(`${BE_BASE_URL}/products/all-products`);
        console.log(res.data.data);
        dispatch(setProducts(res.data.data));
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    }
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentCategory(entry.target.id);
        }
      });
    }, observerOptions);

    var categoryRefsCurrent = categoryRefs.current;

    products.forEach((title) => {
      if (categoryRefs.current[title]) {
        observer.observe(categoryRefs.current[title]);
      }
    });

    return () => {
      products.forEach((title) => {
        if (categoryRefsCurrent[title]) {
          observer.unobserve(categoryRefsCurrent[title]);
        }
      });
    };
  });

  return (
    <VStack>
      <Center p={3} w={"100%"} bg={"#202020"}>
        <Text color={"white"} mr={5}>
          LET&apos;S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        </Text>
        <Button
          bg={"#e4002b"}
          color="#fff"
          border="none"
          _hover={{ bg: "rgb(200,0,43)" }}
          borderRadius={50}
          p={"0 30px"}
        >
          Start Order
        </Button>
      </Center>
      <HStack alignItems={"flex-start"} m={"auto 100px"}>
        <SidePanel currentCategory={currentCategory} />
        <VStack w={"70%"}>
          <InputGroup>
            <InputLeftElement>
              <SearchIcon color="grey.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Search" borderRadius="50px" />
          </InputGroup>
          <Divider color="#000" m={"10px auto 50px auto"} />
          {products.map((title, index) => (
            <div
              key={index}
              id={title}
              ref={(el) => (categoryRefs.current[title] = el)}
            >
              <Category
                title={title}
                userId={user._id}
                // products={allProducts}
                products={productsArr}
                // products={productsArr.filter(product => product.category === title)}
              />
            </div>
          ))}
        </VStack>
      </HStack>
    </VStack>
  );
}

export default MenuPage;
