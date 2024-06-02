import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Image,
  Text,
  Box,

} from "@chakra-ui/react";
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios"
import { useDispatch } from "react-redux";
import { cartActions } from "../store";

function ProductDetail() {
  const[product,setProduct]=useState([])
    const params=useParams()

    const dispatch=useDispatch()

  function addToCartHandler(){
    dispatch(cartActions.addToCart(product))
  }

  useEffect(()=>{
    axios.get(`http://Localhost:8000/api/books/${params.id}`).then(res=>{
        setProduct(res.data.data[0])})
},[])

  return (
    
    <Box display='flex' flex='1'>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        flex='1'
        dir="rtl"
      >
        <Image
          objectFit="fill"
          maxW={{ base: "100%", sm: "45%", md: "30%" }}
          src={product.bookcoverimage}
          alt=""
        />

        <Stack flex='1'>
          <CardBody>
            <Heading size="md">{product.bookname}</Heading>

            <Text py="2">
              {product.description}
            </Text>
            <Text color="orange.500" fontSize="2xl">
          {`${product.price}ریال`}
          </Text>
          </CardBody>

          <CardFooter>
          <Button variant="solid" colorScheme="orange" onClick={addToCartHandler}>
              Add to cart
              </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
}

export default ProductDetail;
