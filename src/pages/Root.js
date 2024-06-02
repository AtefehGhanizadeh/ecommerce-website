import { Outlet, useLoaderData } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import axios from "axios";

function Root() {
  return (
    <Flex minH="100vh" flexDir="column" gap="1rem">
      <Navbar/>
      <Flex
        flex="1"
        marginTop="102.6px"
        padding="0 1.5rem"
        paddingTop="1rem"
        flexDir="column"
      >
        <Outlet/>
      </Flex>
      <Footer/>
    </Flex>
  );
}

export default Root;


// export async function loader() {
//   try{
//       const res=await axios.get("http://escapegardi.ir//API/Category.aspx")
//       return res.data
//   }catch{

//   }
// }