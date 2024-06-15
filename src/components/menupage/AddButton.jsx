import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

function AddButton({ title, onClick }) {
  return (
    <Button
      rightIcon={<AddIcon />}
      borderRadius={50}
      bg={"#e4002b"}
      fontSize={"small"}
      _hover={{ opacity: 0.9 }}
      border={"none"}
      color={"#fff"}
      variant="solid"
      outline={"none"}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}

AddButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
