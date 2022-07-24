import { StarIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Badge, Box, Button, Checkbox, Flex,  Icon, Image, Select, SimpleGrid, Stack, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {FiHeart} from "react-icons/fi"
import  '../../App.css'
import axios from "axios";

export default function Product2() {
    const toast = useToast();
    const [Data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const [color1,setColor] = useState("black");
    const [pricelimit , setPricelimit] = useState(0);
    const [order,setOrder] = useState("asc");

    function getdata(p,q,s,t){
        axios.get(`https://json-server-manoj-api.herokuapp.com/posts?_page=${p}&_limit=3&color=${q}&price_gte=${s}&_sort=price&_order=${t}`).then((res)=>{
                setData(res.data);
        })
    }
console.log(order);
    useEffect(()=>{
        getdata(page,color1,pricelimit,order)   
     },[page,color1,pricelimit,order])


    function addtocart(data){
         axios.post("https://json-server-manoj-api.herokuapp.com/cart",data).then(()=>{    toast({
                        title: 'Product is Added to Cart Successfully!',
                        position:"top",
                        status: 'success',
                        duration: 2000,
                        isClosable: false,
                    })
                }).catch((err)=>{
                    toast({
                        title: 'Product is Already Present in Cart!',
                        position:"top",
                        status: 'error',
                        duration: 2000,
                        isClosable: false,
                      })
                })
      }
    
      function Noproduct(){
        return(
            <Box w="100%" h="500px" >
           < Image src="https://www.villezone.com/public_html/front_view/img/no-result.png" alt="NO PRODUCT AVAILABLE" />
        </Box>
        )
      }

      function Total (){
          return (
              new Array(3).fill().map((_,i)=>(
                  <Button key={i} bg="black" color="white" onClick={()=>setPage(i+1)}>{i+1}</Button>
                  ))
                  )
                }       
//  filter data;
  const color = ["navy","Blue","orange","green","red","black"];
  const sorting = [1000,3000 ,5000 ,10000 ,15000,20000];
  const dummy= ["Sale","Material" ,"Occasion","Sleeve Length","Sports League","Style"];
  return (
    <>
     <Flex w="80%"m="auto"   mt="40px"  justifyContent={"space-between"}>
       
        <Box w="300px" p="20px">
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    <Text as="b">Color</Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                {
                    color.map((i)=>(
                        <AccordionPanel pb={4}>
                        <Flex alignContent="center" justifyContent={"space-evenly"}>
                       {/* <Checkbox type="checkbox" w="30px" /> */}
                       <Button w="120px" onClick={()=>setColor((i).toLocaleLowerCase())} h="30px" mb="-12px" p="3px 5px" bg={i} color="white">{(i).toUpperCase()}</Button>
                        </Flex>
                    </AccordionPanel>
                    ))
                }
            </AccordionItem>


            <AccordionItem >
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    <Text as="b">Price</Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Flex direction="column" alignContent="center" justifyContent={"space-evenly"} >
                  {
                    sorting.map((i)=>(
                        <Button w="200px" onClick={()=>setPricelimit(i)} h="40px" p="0" bg={"white"} >Greater then: {i}</Button>
                        ))
                    }
                    </Flex>
                </AccordionPanel>
            </AccordionItem>


{
    dummy.map((i)=>(
       <AccordionItem >
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    <Text as="b">{i}</Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
            </AccordionItem>
))
}
     
            </Accordion>
            </Box> 
           
     <Box w="70%">
        <Flex mb="10px" justifyContent={"flex-end"} >
        <Stack spacing={3} >
            <Select  variant='outline' onChange={(e)=>setOrder(e.target.value)} placeholder='Sort by Price'>
                <option value='ASC'>Ascending Order</option>
                <option value='DESC'>Descending Order</option>
            </Select>
        </Stack>
        </Flex>
        {
            Data.length>0 ?
        
    <SimpleGrid columns={3}  spacing={10} gapY="20px" rowGap="30px">
        {
            Data.map((items ,i)=>(
                <Box key={i} height="480px" textAlign="center" p="5px" position={"relative"} >
                 <Badge colorScheme='green' zIndex="10" variant='subtle' position={"absolute"} right="1" top="1" p="3px" fontSize="12px" >{items.new_collection ? "New" : "Limited Stock"}
                 </Badge>
                  <Icon as={FiHeart} position="absolute"  right="-10" fontSize={"20px"} top="1"/>
                  <Box className='imageContainer'>
                        <img objectfit="contain"  width="200px" height="200px" src={items.avatar[0]} alt={i+1} />
                        <img  className="image-hover" objectfit="contain"  width="200px" height="200px" src={items.avatar[1]} alt={i+1} />
                  </Box>
                <Text as="p" fontWeight="500" w="250px" h="28px"  overflow="hidden" >{items.name}</Text>
                <Text as="i" fontSize="11px" >{(items.brand).toUpperCase()}</Text>
                <Text color="red" as="p">INR {items.price}
              {"  "} <Text as="span" fontSize="10px" >(Extra {items.discount}% off)</Text>
                </Text>
              {new Array(5).fill("").map((_, i) => (
              <StarIcon
              key={i}
              color={i < Math.ceil(items.rating) ? "yellow.400" : "gray.300"}
              />
              ))}
            <Button display={"flex"} m="auto" mt="4" bg="black" color={"white"} w="80%" _hover={{bg:"gray"}}  onClick={()=>addtocart(items)} >Add to Cart</Button>
            </Box>
          ))
        }
    </SimpleGrid>
 : <Noproduct />
 }
         {/* Pagenation  */}
         <Flex gap="20px"   m="auto" mt="50px" ml="35%" >
            {
                < Total  />
            }
         </Flex>
          </Box>
        </Flex>
            </>
  )
}

