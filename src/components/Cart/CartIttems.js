import { Card, CardHeader, CardBody, CardFooter,Button,Image,Stack,Heading,Text } from '@chakra-ui/react'
function CartItems(props) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      height='100px'
      dir='rtl'
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={props.item.bookcoverimage}
        alt=""
      />
      <Stack>
        <CardBody >
          <Heading size="sm">{props.item.bookname}</Heading>
          <Text size="xs">{props.item.price}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default CartItems;
