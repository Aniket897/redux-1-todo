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
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_TODO } from "../redux/todo/actionsType";

function EditTodo({ title, description, status, id, time }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [_title, setTitle] = useState(title);
  const [_description, setDecription] = useState(description);
  const [_status, setStatus] = useState(description);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(title);
    setDecription(description);
    setStatus(status);
  }, []);

  const hangleUpdate = () => {
    if (!_title || !_description || !_status) {
      toast({
        title: "Validation error.",
        description: "all fields are required.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    dispatch({
      type: UPDATE_TODO,
      payload: {
        id,
        updatedTodo: {
          title: _title,
          description: _description,
          status: _status,
          time,
          id,
        },
      },
    });
    toast({
      title: "Success.",
      description: "todo updated successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Edit Todo
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>📝 Edit todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title of todo</FormLabel>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                ref={initialRef}
                placeholder="title"
                value={_title}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                onChange={(e) => setDecription(e.target.value)}
                placeholder="description"
                value={_description}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Status</FormLabel>
              <Select
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Select status"
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={hangleUpdate} colorScheme="blue" mr={3}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditTodo;
