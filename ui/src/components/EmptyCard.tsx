import { Heading, Box, Text, Center, VStack, Image } from "@chakra-ui/react";

function EmptyCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Box
      flex={1}
      maxW="34rem"
      pb="2"
      border="2px"
      borderColor="white"
      rounded="1rem"
    >
      <Center py={5} px={6}>
        <VStack spacing={8}>
          <Heading as="h2" fontWeight="semibold" fontSize="3xl">
            {title}
          </Heading>
          <Image src="./illustrations/no_data.svg" w="5rem" pt="2rem" />
          <Text textAlign="center" fontWeight="semibold">
            {description}
          </Text>
        </VStack>
      </Center>
    </Box>
  );
}

export default EmptyCard;
