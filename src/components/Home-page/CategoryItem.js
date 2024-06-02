import { Flex,Circle,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function CategoryItem(props) {
  return (
    <Link to={`products/${props.category}`}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
      >
        <Circle size="150px" bg='orange.100'>
          <Text textAlign='center' fontSize='md' color="orange.700">{props.category}</Text>
        </Circle>
        
      </Flex>
    </Link>
  );
}

export default CategoryItem;
