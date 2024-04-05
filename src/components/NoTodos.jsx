import { Flex, Heading, Image } from "@chakra-ui/react";

import { useSelector } from "react-redux";

const NoTodos = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"70vh"}
      flexDirection={"column"}
      gap={30}
    >
      <Image height={"300px"} src="/no-result.svg" />
      <Heading color={theme == "light" ? "black" : "white"}>
        No Todos found
      </Heading>
    </Flex>
  );
};

export default NoTodos;
