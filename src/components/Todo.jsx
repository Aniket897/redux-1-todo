import { Badge, Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { DELETE_TODO } from "../redux/todo/actionsType";
import EditTodo from "./Edit";

const Todo = ({ title, description, id, time, status }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = () => {
    dispatch({ type: DELETE_TODO, payload: { id } });
    toast({
      title: "Success.",
      description: "todo deleted successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box bg={"blanchedalmond"} p={5} borderRadius={10}>
      <Badge colorScheme={status == "Pending" ? "red" : "green"}>
        {status}
      </Badge>
      <Text fontSize={"larger"}>{title}</Text>
      <Text>{description}</Text>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={5}>
        <EditTodo {...{ title, description, status, id, time }} />
        <Button onClick={handleDelete} colorScheme="red">
          Delete todo
        </Button>
      </Flex>
    </Box>
  );
};

export default Todo;
