import { Box, Divider, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function Img3() {
    let links=["Women","Men","Actiwear","Kids","Home","Beauty Exclusives" ,"All"]
  return (
    <> 
    <Box w="80%" m="auto" mt="40px"  position= 'relative'>
          <Image width="100%"
            m="auto" src="https://n.nordstrommedia.com/id/c17ab408-7161-47c3-ba2c-1fd8b726af63.jpeg?h=700&w=1608" alt="Happy Anniversary sale" />
            <Box position="absolute" right="100" top="180"  >
             <Text fontWeight="400" fontSize="18px" w="300px" mt="20px"  as="p"> 
                Score great gifts from La Mer, Dior ,Bobbi Brown, Jo Malone London and more top brands. Hurry-quantities are limited!
             </Text>
            <Link ><Text textDecor="underline 1px" fontWeight="500">Gifts with Purchase</Text></Link>            
             </Box>
           <Divider mt="20px" padding="1px" bg="black"/>
           </Box>
           </>
  )
}
