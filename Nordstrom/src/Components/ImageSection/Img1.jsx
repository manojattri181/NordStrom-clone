import { Box,  Grid, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function Img1() {
    let links=["Women","Men","Actiwear","Kids","Home","Beauty Exclusives" ,"All"]
  return (
    <> 
    <Box mt="40px"  position= 'relative'>
          <Image width="80%"
           m="auto" src="https://n.nordstrommedia.com/id/d6e626cd-9f0b-41e5-8622-acf135347c37.jpeg?h=700&w=1608" alt="Happy Anniversary sale" />
            <Box position="absolute" right="288" top="180"  >
             <Text fontWeight="400" fontSize="18px"  as="p"> 
                Pick up today in store or curbside.
             </Text>
             <Link><Text fontWeight="500" mt="10px" textDecor="underline 1px">Get Inspired</Text></Link>
             <Text mt="10px" fontWeight="500">Shop Now:</Text>
             <Grid templateColumns='repeat(5, 1fr)' mt="10px" w="100px" gap="10px">
                    {
                        links.map((items,i)=>(
                            <Link key={i} ><Text textDecor="underline">{items}</Text></Link>
                        ))
                    }
             </Grid>
             </Box>
           </Box>
           </>
  )
}
