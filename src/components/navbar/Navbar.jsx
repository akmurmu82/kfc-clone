import { Flex, Text } from "@chakra-ui/react";

function Navbar() {
  function Menu(prop) {
    return <div>{prop.title}</div>;
  }
  const menus = [{ title: "Menu" }, { title: "Deals" }];
  return (
    <nav
      style={{
        display: "flex",
        border: "1px solid red",
        width: "100vw",
        justifyContent: "space-between",
      }}
    >
      <Flex border="1px solid">
        {menus.map((menu, ind) => (
          <Menu key={ind} title={menu.title} />
        ))}
      </Flex>
      <Flex border="1px solid">
        <Text>Sign Up</Text>
      </Flex>
    </nav>
  );
}

export default Navbar;
