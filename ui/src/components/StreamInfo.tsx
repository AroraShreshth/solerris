import {
  Box,
  Text,
  HStack,
  VStack,
  Button,
  Spacer,
  Progress,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import { Stream } from "../types";

const DateText = ({ date }: { date: DateTime }) => {
  return (
    <Text fontWeight="semibold">
      {date.day} {date.monthShort}
    </Text>
  );
};

function StreamInfo({ stream }: { stream: Stream }) {
  return (
    <Box
      border="1px solid"
      borderColor={stream.isActive ? "white" : "red.300"}
      w="35rem"
      rounded="lg"
      px="1rem"
      pt="0.8rem"
      pb="1.2rem"
    >
      <HStack>
        <Text>
          {stream.isSender ? <>To: {stream.to}</> : <>From: {stream.from}</>}
        </Text>
        <Spacer />
        <HStack>
          <Text>Status: </Text>
          {stream.isActive ? (
            <Text textColor="green.400">Active</Text>
          ) : (
            <Text textColor="red.400">Stopped</Text>
          )}
        </HStack>
        <Spacer />
        {stream.isSender ? (
          stream.isActive ? (
            <Button colorScheme="red" size="sm" rounded="lg">
              STOP
            </Button>
          ) : (
            <Button colorScheme="purple" size="sm">
              Retrieve {stream.totalSOL.sub(stream.claimableSOL).toString()} SOL
            </Button>
          )
        ) : (
          <Button colorScheme="purple" size="sm">
            Claim {stream.totalSOL.sub(stream.claimableSOL).toString()} SOL
          </Button>
        )}
      </HStack>
      <HStack>
        <Box w="72%">
          <HStack pt="1rem" px="0.5rem">
            <DateText date={stream.startDate} />
            <Spacer />
            <DateText date={stream.endDate} />
          </HStack>
          <Progress
            value={parseInt(stream.claimableSOL.toString())}
            max={parseInt(stream.totalSOL.toString())}
            rounded="lg"
          />
        </Box>
        <VStack px="1rem" pt="1rem">
          <Text>
            {stream.claimableSOL.toString()} / {stream.totalSOL.toString()} SOL
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default StreamInfo;
