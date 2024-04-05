import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../redux/todo/actionsType";
import { v4 as uuid } from "uuid";

function CreateTodo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDecription] = useState("");
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const toast = useToast();
  const dispatch = useDispatch();

  const hangleCreate = () => {
    if (!title || !description) {
      toast({
        title: "Validation error.",
        description: "both title and description are required.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    dispatch({
      type: ADD_TODO,
      payload: {
        title,
        description,
        id: uuid(),
        time: Date.now(),
        status: "Pending",
      },
    });
    toast({
      title: "Success.",
      description: "todo created successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Create Todo</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>📝 Create new todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title of todo</FormLabel>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                ref={initialRef}
                placeholder="title"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                onChange={(e) => setDecription(e.target.value)}
                placeholder="description"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={hangleCreate} colorScheme="blue" mr={3}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateTodo;
