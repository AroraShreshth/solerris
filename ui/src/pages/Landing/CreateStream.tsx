import { useState } from "react";
import {
  Box,
  Container,
  FormLabel,
  Input,
  HStack,
  InputGroup,
  InputRightElement,
  Center,
  Text,
  VStack,
  Button,
  Tooltip,
  Stack,
} from "@chakra-ui/react";
import { BigNumber } from "@ethersproject/bignumber";
import { SingleDatepicker } from "../../components/DatePicker";
import { InfoIcon } from "@chakra-ui/icons";
import EmptyCard from "../../components/EmptyCard";

function CreateStream() {
  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<BigNumber>(BigNumber.from(0));
  const [endDate, setEndDate] = useState<Date>(new Date());

  return (
    <>
      <Container my="16" minW={["0", "0", "2xl", "2xl"]}>
        <Center>
          <VStack>
            <HStack>
              <HStack>
                <Text fontWeight="semibold">Address</Text>
                <Input
                  placeholder="Address"
                  aria-label="address"
                  autoComplete="off"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  bg="gray.700"
                  w="20rem"
                  rounded="full"
                />
              </HStack>
              <HStack pl="5rem">
                <Text fontWeight="semibold">Amount</Text>
                <InputGroup>
                  <Input
                    placeholder="Amount"
                    aria-label="amount"
                    autoComplete="off"
                    type="number"
                    value={amount?.toString()}
                    onChange={(e) => {
                      const _amount = e.target.value;
                      const _amountBN =
                        _amount == ""
                          ? BigNumber.from(0)
                          : BigNumber.from(_amount);
                      setAmount(_amountBN);
                    }}
                    bg="gray.700"
                    w="7rem"
                    rounded="full"
                    textAlign="right"
                    pr="3.2rem"
                  />
                  <InputRightElement children={"SOL"} pr="1.2rem" />
                </InputGroup>
              </HStack>
            </HStack>
            <HStack pt="1.5rem">
              <Text fontWeight="semibold" minW="5rem">
                End Date
              </Text>
              <SingleDatepicker
                name="date-input"
                date={endDate}
                onDateChange={setEndDate}
                bg="gray.700"
                rounded="full"
              />
            </HStack>
            <HStack pt="2rem">
              <Button minW="20rem" colorScheme="blue" rounded="full">
                Create Payment Stream
              </Button>
              <Tooltip
                hasArrow
                label="What does this do?"
                placement="top"
                bg="gray.300"
                color="black"
              >
                <Box px="1rem">
                  <InfoIcon />
                </Box>
              </Tooltip>
            </HStack>
          </VStack>
        </Center>
      </Container>
      <Container minW={{ base: "100%", lg: "5xl" }} mt="10" alignItems="center">
        <Stack
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "stretch" }}
          mx={4}
          spacing={5}
          justifyContent="space-between"
        >
          <EmptyCard title="Sending Streams" description="No Streams Sending" />
          <EmptyCard
            title="Receiving Streams"
            description="No Streams Receiving"
          />
        </Stack>
      </Container>
    </>
  );
}

export default CreateStream;
