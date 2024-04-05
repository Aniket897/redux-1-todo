import { useSelector } from "react-redux";
import Header from "./components/Header";
import { Stack } from "@chakra-ui/react";
import Todo from "./components/Todo";
import NoTodos from "./components/NoTodos";
import { Box } from "@chakra-ui/react";

const App = () => {
  const todos = useSelector((state) => state.todo);
  const theme = useSelector((state) => state.theme);
  return (
    <Box
      bg={theme == "dark" ? "black" : "white"}
      width={"100vw"}
      height={"100vh"}
    >
      <Header />
      {todos.length == 0 && <NoTodos />}
      <Stack width={{ base: "90vw", md: "50vw" }} mx={"auto"} pt={50}>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </Stack>
    </Box>
  );
};

export default App;
