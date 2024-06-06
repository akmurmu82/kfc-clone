import { Text, VStack } from "@chakra-ui/react";

function SidePanel({ currentCategory }) {
  const categories = [
    "INTERNATIONAL BURGER FEST",
    "MATCH DAY COMBOS",
    "VALUE LUNCH SPECIALS",
    "BOX MEALS",
    "BURGERS",
    "CHICKEN BUCKETS",
    "RICE BOWLZ",
    "VALUE SNACKERS",
    "CHICKEN ROLLSF",
  ];

  return (
    <VStack
      position="sticky"
      top="150px" // Adjust this value to match the height of your navbar
      gap={5}
      w="25%"
      alignItems={"flex-start"}
    >
      <Text fontSize={30} as="b">
        KFC MENUS
      </Text>
      {categories.map((category, index) => (
        <Text
          key={index}
          fontSize="medium"
          fontWeight={currentCategory === category ? "bold" : "normal"}
        >
          {category}
        </Text>
      ))}
    </VStack>
  );
}

export default SidePanel;
