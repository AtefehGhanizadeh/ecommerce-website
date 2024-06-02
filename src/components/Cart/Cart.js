import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    IconButton,
    useDisclosure,
    Flex
  } from '@chakra-ui/react'
  import { ShoppingCart} from "lucide-react";
  import { useSelector } from 'react-redux';
  import CartItems from './CartIttems'


function Cart(){
    const cartItems=useSelector(state=>state.cartItems)
    const cartAmount=useSelector(state=>state.total)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
          <IconButton
            onClick={onOpen}
              aria-label="shopping cart"
              icon={<ShoppingCart />}
              size="sm"
              color="black"
              colorScheme="white"
            ></IconButton>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex flexDir='column' gap='1rem' >
                  {cartItems.map(item=><CartItems item={item}/>)}
                </Flex>
                  
                <p>{cartAmount}</p>
                 
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}

export default Cart