import BestSell from "../components/Home-page/BestSell"
import Category from "../components/Home-page/Category"
import Slider from "../components/Home-page/Slider"
import { Flex } from "@chakra-ui/react"

function Home(){
    return(
        <>
            <Slider/>
            <Flex flexDir='column' gap='2rem'>
                <Category/>
                <BestSell/>
            </Flex>
        </>
    )
}

export default Home