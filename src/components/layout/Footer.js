import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box padding="0 1.5rem">
      <Box
        borderTop="1px solid"
        borderBottom="1px solid"
        marginBottom="2rem"
        padding="3rem 0"
      >
        <Flex
          gap={["1rem", "1rem", "8rem"]}
          flexDir={["column", "column", "row"]}
        >
          <Flex
            flexDir="column"
            width={["100%", "100%", "30%"]}
            height={["80px", "150"]}
            gap="1rem"
          >
            <Text fontWeight="bold" lineHeight="1rem" fontSize={["sm", "2xl"]}>
              My Shop
            </Text>
            <Text as={"p"} fontSize={["2xs", "md"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Flex>
          <Flex
            flex="1"
            rowGap="1.5rem"
            columnGap={["1rem", "4rem", "4rem"]}
            flexWrap="wrap"
          >
            <Flex flexDir="column" gap="1rem">
              <Text fontWeight="bold" lineHeight="1rem" fontSize={["xs", "sm"]}>
                About us
              </Text>
              <Flex as={"ul"} listStyleType="none" flexDir="column" gap="1rem">
                <Text as={"li"} fontSize={["2xs", "sm"]}>
                  About myshop
                </Text>
                <Text as={"li"} fontSize={["2xs", "sm"]}>
                  News & Blog
                </Text>
                <Text as={"li"} fontSize={["2xs", "sm"]}>
                  Careers
                </Text>
              </Flex>
            </Flex>
            <Flex flexDir="column" gap="1rem">
              <Text fontWeight="bold" lineHeight="1rem" fontSize={["xs", "sm"]}>
                Services
              </Text>
              <Flex as={"ul"} listStyleType="none" flexDir="column" gap="1rem">
                <Text as={"li"} fontSize={["2xs", "sm"]}>
                  Gift Card
                </Text>
                <Text as={"li"} fontSize={["2xs", "sm"]}>
                  Mobile App
                </Text>
              </Flex>
            </Flex>
            <Flex flexDir="column" gap="1rem">
              <Text fontWeight="bold" lineHeight="1rem" fontSize={["xs", "sm"]}>
                Help
              </Text>
              <Flex as={"ul"} listStyleType="none" flexDir="column" gap="1rem">
                <Text as={"li"} fontSize={["2xs", "sm"]}>
                  Myshop Help
                </Text>
                <Text as={"li"} fontSize={["2xs", "sm"]}>
                  returns
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
