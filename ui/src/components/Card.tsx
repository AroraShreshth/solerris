import { Heading, Box, Text, Center, VStack, Image } from "@chakra-ui/react";
import StreamInfo from "./StreamInfo";
import { Stream } from "../types";

function Card({
  title,
  description,
  streams,
}: {
  title: string;
  description: string;
  streams: Stream[];
}) {
  return (
    <Box
      flex={1}
      maxW="100%"
      pb="2"
      border="2px"
      borderColor="white"
      rounded="1rem"
    >
      <Center py={5}>
        <VStack spacing={8}>
          <Heading as="h2" fontWeight="semibold" fontSize="3xl">
            {title}
          </Heading>
          {!streams.length && (
            <VStack>
              <Image src="./illustrations/no_data.svg" w="5rem" pt="2rem" />
              <Text textAlign="center" fontWeight="semibold">
                {description}
              </Text>
            </VStack>
          )}
          {streams.length &&
            streams.map((stream) => <StreamInfo stream={stream} />)}
        </VStack>
      </Center>
    </Box>
  );
}

export default Card;
