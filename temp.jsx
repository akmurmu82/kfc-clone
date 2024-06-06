import {
    Divider,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    VStack,
  } from "@chakra-ui/react";
  import SidePanel from "../../components/menupage/SidePanel";
  import { SearchIcon } from "@chakra-ui/icons";
  
  function MenuPage() {
    return (
      <HStack alignItems={"flex-start"} border="1px solid">
        <SidePanel />
        <VStack w={"70%"}>
          <InputGroup>
            <InputLeftElement>
              <SearchIcon cikir="grey.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Search" borderRadius="50px" />
          </InputGroup>
          <Divider color="#000" />
        </VStack>
      </HStack>
    );
  }
  
  export default MenuPage;

  import { SimpleGrid, Text, VStack } from "@chakra-ui/react";

function Category({ title, products }) {
  return (
    <VStack>
      <Text>{title}</Text>
      <SimpleGrid>
        {products.map((product, index)=> {})}
      </SimpleGrid>
    </VStack>
  );
}

export default Category;

import { Text, VStack } from "@chakra-ui/react";

function SidePanel() {
  return (
    <VStack
      position="sticky"
      left="0"
      gap={5}
      border="1px solid"
      w="30%"
      alignItems={"flex-start"}
      pl={120}
    >
      <Text fontSize={30} as="b">
        KFC MENUS
      </Text>
      <Text fontSize="medium">INTERNATIONAL BURGER FEST</Text>
      <Text fontSize="medium">MATCH DAY COMBOS</Text>
      <Text fontSize="medium">VALUE LUNCH SPECIALS</Text>
      <Text fontSize="medium">BOX MEALS</Text>
      <Text fontSize="medium">BURGERS</Text>
      <Text fontSize="medium">CHICKEN BUCKETS</Text>
      <Text fontSize="medium">RICE BOWLZ</Text>
      <Text fontSize="medium">VALUE SNACKERS</Text>
      <Text fontSize="medium">CHICKEN ROLLSF</Text>
    </VStack>
  );
}

export default SidePanel;
