import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';

let b_data=[
    {"details":"Shipping outside of the U.S. or Canada?",
    "learn":"Learn About International Shipping" ,
     "bg":["black","white"]},
    {"details":"Pick Up Today-in store or curbside.",
    "learn":" Learn More.",
     "bg":["#FBE446","black"]},
    {"details":"Anniversary Sale is on!",
    "learn":" Shop Now",
     "bg":["#FBE446","black"]},
    {"details":"Get a $40 Bonus Note!",
    "learn":" An exclusive offer for new Nordstrom credit cardmembers. Restrictions apply.",
     "bg":["black","white"]},
 ]


export default function Banner() {
    let showBanner = Math.floor(Math.random()*4);
    const [data,setData] = useState(showBanner);
  return (
    <Flex w="100%" p="9px 0px 10px" fontSize="14px" bg={b_data[showBanner].bg[0]} color={b_data[showBanner].bg[1]}>
        <Box m="auto" >
        <Text as="p" ml="24rem" >
            <Text as="b" fontWeight="600">
            {b_data[showBanner].details}{" "}
                </Text>
            <Text as="span" textDecor="underline">
                {b_data[showBanner].learn}
            </Text>
            </Text> 
        </Box>
        <Flex pr="150px">
        <Image
            borderRadius='full'
            boxSize='20px'
            src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
            alt='Dan Abramov'
            />
            <Text px="10px" fontSize="16px"> 
                India</Text>
        </Flex>
        </Flex>
  )
}
