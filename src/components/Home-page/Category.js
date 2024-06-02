import { Flex,Text} from "@chakra-ui/react"
import CategoryItem from "./CategoryItem"
import {useRouteLoaderData } from "react-router-dom";

function Category(){

    // const categoryList=useRouteLoaderData('root')
    const categoryList = [
        "کمک درسی ",
        "داستانی",
        "غیر داستانی",
        "زندگینامه",
        "طنز",
        "رمان",
        "هیجان انگیز",
        "عاشقانه",
        "زبان خارجی",
        "رازآلود",
        "شعر",
        "فلسفه",
        " علمی-تخیلی",
        "تاریخ",
        "خودیاری",
      ]
    

    return(
        <Flex marginTop='2rem' flexDirection='column' gap='2rem' >
            <Text as={'h2'} fontSize='3xl'>Categories</Text>
            <Flex gap='6rem' flexWrap='wrap' justifyContent="center">
                {categoryList.map(cat=><CategoryItem category={cat} key={Math.random()}/>)}
            </Flex>
        </Flex>
    )
}

export default Category