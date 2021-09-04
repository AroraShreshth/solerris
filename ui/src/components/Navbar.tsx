import {
  Button,
  Flex,
  Heading,
  Spacer,
  Box,
  Text,
  Center,
  VStack,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      py="4"
      px={["2", "4", "10", "10"]}
      borderBottom="2px"
      borderBottomColor={"gray.400"}
    >
      <Spacer flex="1" />
      <Box maxW={["302px", "4xl", "4xl", "4xl"]}>
        <Center>
          <VStack>
            <Heading fontWeight="bold">SOLERRIS</Heading>
            <Text letterSpacing="wider">Streamable Transactions made easy</Text>
          </VStack>
        </Center>
      </Box>
      <Flex flex="1" justifyContent="flex-end" align="center">
        <Button rounded="lg" h="40px" px="2rem">
          Login
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
