import {
  Text,
  Flex,
  Grid,
} from "@chakra-ui/react";
import BestSellItem from "./BestSellItem";
import { useEffect, useState } from "react";
import axios from "axios";

function BestSell() {
  const[products,setProducts]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:7000/api/search/books/best-sellers').then(res=>setProducts(res.data.data))
  })
  return (
    <Flex flexDir="column"  gap="2rem">
      <Text as={"h2"} fontSize="3xl">
        Best Seller Products
      </Text>
      <Grid templateColumns='repeat(5, 1fr)'  rowGap='2rem' columnGap="20px" flexWrap='wrap'>
        {products.map(product=><BestSellItem product={product}/>)}
      </Grid>
    </Flex>
  );
}

export default BestSell;
