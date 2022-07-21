import { Box, Grid, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Img2() {
    let data=[
        {
            src:"https://n.nordstrommedia.com/id/2c50b98a-f701-4ae7-bcd6-40d784dcbb4f.jpeg?h=700&w=1608",
            tag:"Save big on repeat-worthy staples.",
            links:["Shirts","Coats & Jackets","Activewear"]
        },
        {
            src:"https://n.nordstrommedia.com/id/5c95199d-2d5c-4ade-a136-7e575ed09f28.jpeg?h=700&w=1608",
            tag:"New-season shoes add the wow factor to your walk.",
            links:["Boots","Heels","Sneakers","All Shoes"]
        },
        {
            src:"https://n.nordstrommedia.com/id/d6569e83-b6a1-4704-a09b-e361d898031d.jpeg?h=700&w=1608",
            tag:"Build unbeatable looks around these waist-up winners.",
            links:["Sweaters","Coats & Jackets","Tops"]
        }
    ];
    let i =0;
    const [page,setPage] = useState(i);
    useEffect(()=>{
      setInterval(()=>{
          if(i===3){
              i=0;
            }
            setPage(i);
            i=i+1;
        },3000)
    },[i])

  return (
    <> 
    <Box mt="40px"  position= 'relative'>
          <Image width="80%"
           m="auto" src={data[page].src} alt="Happy Anniversary sale" />
            <Box position="absolute" right="288" top="200"  >
             <Text fontWeight="400" overflow="wrap" w="270px"  fontSize="18px"  as="p"> 
             {data[page].tag}
             </Text>
             <Text mt="10px" fontWeight="500">Men:</Text>
             <Grid templateColumns='repeat(5, 1fr)' mt="10px" w="100px" gap="10px">
                    {
                       data[page].links.map((items)=>(
                            <Link ><Text as="p" textDecor="underline">{items}</Text></Link>
                        ))
                    }
             </Grid>
             </Box>
           </Box>
           </>
  )
}
