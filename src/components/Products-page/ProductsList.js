import { Box,Flex } from "@chakra-ui/react"
import ProductItem from "./ProductItem"

function ProductsList(props){
    
    return(
        <Box paddingTop='1rem'>
            <Flex columnGap='3%' rowGap='2rem' flexWrap='wrap'>
                {props.productsList.map(productItem=><ProductItem info={productItem} key={productItem.id}/>)}
            </Flex>
        </Box>
    )
}

export default ProductsList