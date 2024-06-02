import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,Flex
} from '@chakra-ui/react'

import {ChevronDownIcon} from '@chakra-ui/icons'

function Sort(){
    return(
        <Flex justifyContent='flex-end' paddingBottom='1rem' borderBottom='1px solid lightgray'>
        <Menu>
            <MenuButton as={Button} width='100px' rightIcon={<ChevronDownIcon />}>
                Sort by
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
        </Flex>
    )
}

export default Sort