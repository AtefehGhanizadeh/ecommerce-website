import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";


function Menubar() {

  // const categoryList=useLoaderData()
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
  // const categoryList=[{id:1,categoryTitle:"لباس"},{id:2,categoryTitle:"کتاب"},{id:3,categoryTitle:"ماشین"},{id:4,categoryTitle:"موتور"}]

  return (
    <Box borderTop="1px solid" borderBottom="1px solid" padding="0 1.5rem">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          leftIcon={<HamburgerIcon />}
          variant="outline"
          justifyContent="center"
          alignItems="center"
          border="none"
          borderRadius="none"
          _active={{
            backgroundColor: "none",
          }}
          _hover={{
            backgroundColor: "none",
          }}
        >
          Category
        </MenuButton>
        <MenuList minW="0" width="100vw">
          {categoryList.map(item=><Link to={`products/${item}`} key={item}><MenuItem>{item}</MenuItem></Link>)}
        </MenuList>
      </Menu>
    </Box>
  );
}
export default Menubar;
