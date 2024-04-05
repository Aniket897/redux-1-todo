import { Flex, Heading, Button } from "@chakra-ui/react";
import CreateTodo from "./Create";
import { useDispatch } from "react-redux";
import { TOGGLE_THEME } from "../redux/theme/actionTypes";

const Header = () => {
  const dispatch = useDispatch();
  function toggleTheme() {
    dispatch({ type: TOGGLE_THEME });
  }

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      px={{ base: "0", md: 10 }}
      py={5}
      bg={"blanchedalmond"}
    >
      <Heading>⭐TODOS</Heading>
      <Flex gap={10}>
        <CreateTodo />
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
