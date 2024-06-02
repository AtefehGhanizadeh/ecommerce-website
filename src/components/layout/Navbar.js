import {
  Box,
  Flex,
  HStack,
  Spacer,
  VStack,
  Text,
  IconButton,
  Circle,
} from "@chakra-ui/react";
import { Link} from "react-router-dom";
import {UserCircle2 } from "lucide-react";
import Menubar from "./Menubar";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

function Navbar() {
  const cartitemNumber=useSelector(state=>state.totalAmount)
  return (
    <VStack
      align="stretch"
      spacing="0"
      position="fixed"
      top="0"
      w="100vw"
      bg="white"
      zIndex="999"
    >
      <Flex padding="0.5rem 1.5rem" alignItems="center">
        <Link to='/'>
          <Text as={"h1"} fontSize="3xl" fontWeight="bold">
            My Shop
          </Text>
        </Link>
        <Spacer></Spacer>
        <HStack>
          <IconButton
            aria-label="shopping cart"
            icon={<UserCircle2 />}
            size="sm"
            color="black"
            colorScheme="white"
          ></IconButton>
          <Box position="relative">
            <Cart/>
            <Circle
              as={"span"}
              position="absolute"
              top="-5px"
              right="-8px"
              bg="orange.500"
              size="20px"
              color="white"
            >
              {cartitemNumber}
            </Circle>
          </Box>
        </HStack>
      </Flex>
      <Menubar />
    </VStack>
  );
}

export default Navbar;
