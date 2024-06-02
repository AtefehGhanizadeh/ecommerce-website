import { Flex, Text } from "@chakra-ui/react";
import Sort from "../components/Products-page/Sort";
import ProductsList from "../components/Products-page/ProductsList";
import { Suspense, useEffect} from "react";
import { Await, useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import { defer } from "react-router-dom";


function Products() {
  const { fetchedProducts } = useLoaderData();

  //this useLoaderData return the response of closest Loader
  //async function returns Promise but loader ensure the returned data is resolved from promise
  //we can get data from useLoaderDate in the route that is defined in it and all the components that are inside of it


  return (
    <Flex flexDir="column">
      <Sort></Sort>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={fetchedProducts}>
          {(loadedProducts) => <ProductsList productsList={loadedProducts} />}
        </Await>
      </Suspense>
    </Flex>
  );
}

export default Products;

async function loadProducts(category) {

  try{
      const res=await axios.get(`http://localhost:7000/api/search/books?category=${category}`)
      return res.data.data
  }catch{

  }
}

export function loader({ request, params }) {
  return defer({
    fetchedProducts: loadProducts(params.category),
  });
}
