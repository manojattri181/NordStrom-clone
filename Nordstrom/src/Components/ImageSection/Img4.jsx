import { Box, Flex,  Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Img4() {
    let data=[
        {
            src:"https://n.nordstrommedia.com/id/37a784a7-eff9-4f35-ade9-f8a8d2347147.jpeg?h=700&w=1608",
            tag:"Fresh Denim",
            desc:"The sillhouttes you need for getting dressed up, enjoying downtime and everything in between..",
            links:["Jeans & Denim"]
        },
        {
            src:"https://n.nordstrommedia.com/id/85ffdbd9-f359-46bd-82a0-8c9d9f78e2a2.jpeg?h=700&w=1608",
            tag:"Disney x Givenchy",
            desc:"Discover the limited-edition capsule collection inspired by Disnay's 101 Dalmatians.",
            links:["Disney x Givenchy" ,"Go Behind the Collection"]
        },
        {
            src:"https://n.nordstrommedia.com/id/fd3f94e5-dd05-4fdf-a138-9ee382548bbc.jpeg?h=700&w=1608",
            tag:"Our Place x Selena Gomez",
            desc:"Selena Gomez Dremed up a limited-edition color duo that gives back to mental health services.",
            links:["Learn More","Shop Now"]
        },
        {
            src:"https://n.nordstrommedia.com/id/4a46b38b-b612-4471-9dcb-99e3a3fb03ee.jpeg?h=700&w=1608",
            tag:"Back to School Under $50",
            desc:"It's almost time-get fits that won't break your budget from brands you're obsessed with.",
            links:["Back to Campus Under  $50","All Back to Campus","Dorm Room Essentials"]
        }

    ];
    let i =0;
    const [page,setPage] = useState(i);
    useEffect(()=>{
      setInterval(()=>{
          if(i===4){
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
            <Box position="absolute" right="160" top="100"  >
                <Heading w="400px" overflow="wrap">{data[page].tag}</Heading>
             <Text fontWeight="400" fontSize="16px" overflow="wrap" mt="20px" w="370px"  as="p"> 
             {data[page].desc}
             </Text>
             <Text mt="10px" fontWeight="500">Men:</Text>
             <Flex  direction="column" mt="10px" w="300px" gap="10px">
                    {
                       data[page].links.map((items,i)=>(
                            <Link key={i} ><Text as="p" textDecor="underline">{items}</Text></Link>
                        ))
                    }
             </Flex>
             </Box>
           </Box>
           </>
  )
}
