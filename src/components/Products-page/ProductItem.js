import {
  Card,
  CardBody,
  Image,
  Text,
  Stack,
  Button,
  ButtonGroup,
  CardFooter,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from '../../store/index';

function ProductItem(props) {
  const dispatch=useDispatch()

  function addToCartHandler(){
    dispatch(cartActions.addToCart(props.info))
  }
  return (
    <Card minW="2xs" maxW={["100%", "100%", "48.5%", "31.33%", "22.75%"]} dir="rtl">
      <CardBody display='flex' flexDir='column'>
        <Image
          src={props.info.bookcoverimage}
          alt=""
          borderRadius="lg"
          h="300px"
          w="300px"
        />
        <Stack mt="6" spacing="3" display='flex' flexDir='column' flex='1'>
          <Heading size="md">{props.info.bookname}</Heading>
          <Text color="orange.500" fontSize="2xl">
          {`${props.info.price}ریال`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Link to={`/products/productDetail/${props.info.id}`}>
          <Button variant="solid" colorScheme="orange">
            See more
          </Button>
          </Link>
          <Button variant="ghost" colorScheme="orange" onClick={addToCartHandler}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProductItem;
