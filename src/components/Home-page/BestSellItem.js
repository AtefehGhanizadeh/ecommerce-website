import {
    Card,
    CardBody,
    Stack,
    Heading,
    Divider,
    ButtonGroup,
    Button,
    CardFooter,
    Text,
    Image,
  } from "@chakra-ui/react";
  import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from '../../store/index';
function BestSellItem(props){
  const dispatch=useDispatch()

  function addToCartHandler(){
    dispatch(cartActions.addToCart(props.info))
  }
    return(
        <Card >
          <CardBody display="flex" flexDir="column" justifyContent="center">
            <Image
              src={props.product.bookcoverimage}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              w="100%"
              h="300px"
            />
            <Stack mt="6" spacing="3" alignItems="end">
              <Heading size="md">{props.product.bookname}</Heading>
              <Text>
                {props.product.description}
              </Text>
              <Text color="orange.500" fontSize="2xl">
                {props.product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
          <ButtonGroup>
          <Link to={`/products/productDetail/${props.product.id}`}>
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
    )
}

export default BestSellItem