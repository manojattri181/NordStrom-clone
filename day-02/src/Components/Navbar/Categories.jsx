import { Box, Button, Divider, Flex, Icon, Image, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr';

export default function Categories() {
 const [show,setShow] = useState(false);
 const [show2,setShow2] = useState(false);
 const [show3,setShow3] = useState(false);
 
 function handleshow(){
        setShow2(false);
        setShow3(false);
        setShow(!show);
    }
    function handleshow2(){
        setShow(false);
        setShow3(false);
        setShow2(!show2);
    }
    function handleshow3(){
        setShow(false);
        setShow2(false);
        setShow3(!show3);
    }

 function Toggle(){
    return (
        <Flex w="100%" h="auto" m="auto"  p="40px 0px 40px 180px "  justifyContent="space-around" shadow="md">
            <Flex direction="column" gap="13px" minW="150px" overflow="wrap" >
                <Link ><Text as="b">Anniversary Sale: Get Inspired</Text></Link>
                 < Divider p="1px" bg="gray.300" />
                <Link ><Text as="b">The Nordy Club</Text></Link>
                <Link ><Text as="b">Style Help</Text></Link>
                <Link ><Text as="b">Bestsellers</Text></Link>
                <Link ><Text as="b">Bestsellers</Text></Link>
                <Link ><Text as="b">Digital Catalog</Text></Link>
                <Link ><Text as="b">Stylist picks</Text></Link>
                <Link ><Text as="b">New Brands</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
                <Link><Text as="b" >Women</Text></Link>
                <Link><Text as="p" >Clothing</Text></Link>
                <Link><Text as="p" >Shoes</Text></Link>
                <Link><Text as="p" >Accessories</Text></Link>
                <Link><Text as="p" >Jewelry & Watches</Text></Link>
                <Link><Text as="p" >Handbags</Text></Link>
                <Link><Text as="p" >Young Adult</Text></Link>
                < Divider p="1px" bg="gray.300"/>
                <Link><Text as="b" >Men</Text></Link>
                <Link><Text as="p" >Clothing</Text></Link>
                <Link><Text as="p" >Shoes</Text></Link>
                <Link><Text as="p" >Accessories</Text></Link>
                <Link><Text as="p" >Jewelry & Watches</Text></Link>
                <Link><Text as="p" >Handbags</Text></Link>
                <Link><Text as="p" >Young Adult</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
                <Link><Text as="b" >Activewear</Text></Link>
                <Link><Text as="p" >Women's Activewear</Text></Link>
                <Link><Text as="p" >Women's Activewear Shoes</Text></Link>
                <Link><Text as="p" >Men's Activewear</Text></Link>
                <Link><Text as="p" >Men's Activewear Shoes & Watches</Text></Link>
                <Link><Text as="p" >Kid's ActiveWear</Text></Link>
                < Divider p="1px" bg="gray.300"/>
                <Link><Text as="b" >Kids</Text></Link>
                <Link><Text as="p" >Girls</Text></Link>
                <Link><Text as="p" >Boys</Text></Link>
                <Link><Text as="p" >Baby</Text></Link>
                <Link><Text as="p" >Baby Gear & Essentials</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
                <Link><Text as="b" >Beauty Exclusives</Text></Link>
                <Link><Text as="p" >Makeup</Text></Link>
                <Link><Text as="p" >Skincare</Text></Link>
                <Link><Text as="p" >Fragrance</Text></Link>
                <Link><Text as="p" >Tools & Devices</Text></Link>
                <Link><Text as="p" >hair Care</Text></Link>
                <Link><Text as="p" >Bath & Body</Text></Link>
                <Link><Text as="p" >Gifts with Purchase</Text></Link>
                < Divider p="1px" bg="gray.300"/>
                <Link><Text as="b" >Designer</Text></Link>
                <Link><Text as="p" >Women</Text></Link>
                <Link><Text as="p" >Men</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
                <Link><Text as="b" >Home</Text></Link>
                <Link><Text as="p" >Bath</Text></Link>
                <Link><Text as="p" >Bedding</Text></Link>
                <Link><Text as="p" >Home Decor & Accessories</Text></Link>
                <Link><Text as="p" >Tabletop & Kitchen</Text></Link>
                < Divider p="1px" bg="gray.300"/>
                <Link><Text as="b" >All Anniversary</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px">
           <Button w="40px" bg="white" ml="200px" mb="50px" fontSize="20px"  onClick={()=>setShow(!show)} ><Icon as={GrClose} /></Button>
                    <Box boxSize='sm'>
            <Image src='https://n.nordstrommedia.com/id/a6d3c20a-8900-4c47-bcc1-d8facc72c178.jpg' alt='Nordstrom Annivesary' />
            </Box>
            <Link><Text as="p" textDecor="underline">Shop Now</Text></Link>
            </Flex>
         </Flex>
    )
 }
 function Toggle3(){
    return (
        <Flex w="100%" h="auto" m="auto"  p="40px 0px 40px 180px "  justifyContent="space-around" shadow="md">
            <Flex direction="column" gap="13px" minW="150px" overflow="wrap" >
                <Link ><Text as="b">Men: Get Inspired</Text></Link>
                 < Divider p="1px" bg="gray.300" />
                <Link ><Text as="b">New Arrivals</Text></Link>
                <Link ><Text as="b">Advanced Modern</Text></Link>
                <Link ><Text as="b">ASOS</Text></Link>
                <Link ><Text as="b">Black-Owned & - Founded Brands</Text></Link>
                <Link ><Text as="b">Contemporary</Text></Link>
                <Link ><Text as="b">Men's Wedding Guest & Cocktail</Text></Link>
                <Link ><Text as="b">Sustainable Style</Text></Link>
                <Link ><Text as="b">New Concepts: SPORTS!</Text></Link>
                <Link ><Text as="b">Men's Looks</Text></Link>
                <Link ><Text as="b">Nordstrom Made</Text></Link>
                <Link ><Text as="b">Sports Fan Shop</Text></Link>
                <Link ><Text as="b">TOPMAN</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
                <Link><Text as="b" >Clothing</Text></Link>
                <Link><Text as="p" >Activewear</Text></Link>
                <Link><Text as="p" >Blazers, Suits & Separates</Text></Link>
                <Link><Text as="p" >Coats & Jackets</Text></Link>
                <Link><Text as="p" >Dress Shirts</Text></Link>
                <Link><Text as="p" >Jeans</Text></Link>
                <Link><Text as="p" >Pants & Leggings</Text></Link>
                <Link><Text as="p" >Pants</Text></Link>
                <Link><Text as="p" >Shirts</Text></Link>
                <Link><Text as="p" >Shorts</Text></Link>
                <Link><Text as="p" >Socks</Text></Link>
                <Link><Text as="p" >Suits & Separates</Text></Link>
                <Link><Text as="p" >Sweatshirts & Hoddies</Text></Link>
                <Link><Text as="p" >Swimsuits & Board Shorts</Text></Link>
                <Link><Text as="p" >T-Shirts</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
                <Link><Text as="b" >Shoes</Text></Link>
                <Link><Text as="p" >Comfort</Text></Link>
                <Link><Text as="p" >Dress Shoes</Text></Link>
                <Link><Text as="p" >Loafers & Slip-Ons</Text></Link>
                <Link><Text as="p" >Oxfords & Derbys</Text></Link>
                <Link><Text as="p" >Running Shoes</Text></Link>
                <Link><Text as="p" >Slippers</Text></Link>
                <Link><Text as="p" >Sneakers & Athletic</Text></Link>
                <Link><Text as="p" >Shoe Care & Accessories</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
                <Link><Text as="b" >Accessories</Text></Link>
                <Link><Text as="p" >Backpacks</Text></Link>
                <Link><Text as="p" >Bags</Text></Link>
                <Link><Text as="p" >Belts</Text></Link>
                <Link><Text as="p" >Hats</Text></Link>
                <Link><Text as="p" >Headphones</Text></Link>
                <Link><Text as="p" >Phone Cases</Text></Link>
                <Link><Text as="p" >Scarves</Text></Link>
                <Link><Text as="p" >Sunglasses & Eyewear</Text></Link>
                <Link><Text as="p" >Ties & Pocket Squares</Text></Link>
                <Link><Text as="b" >Wallet & Card Cases</Text></Link>
                < Divider p="1px" bg="gray.300"/>
                <Link><Text as="b" >Luggage & Travel</Text></Link>
                <br />
                <Link><Text as="b" >Jewelry</Text></Link>
                <Link><Text as="p" >Fine Jewelry</Text></Link>
                <Link><Text as="p" >Watches</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
                <Link><Text as="b" >Designer</Text></Link>
                <Link><Text as="p" >Designer Clothing</Text></Link>
                <Link><Text as="p" >Designer Shoes</Text></Link>
                <Link><Text as="p" >Designer Accessories</Text></Link>
                < Divider p="1px" bg="gray.300"/>
                <Link><Text as="b" >Big & Tall</Text></Link>
                <Link><Text as="p" >Clothing</Text></Link>
                <Link><Text as="p" >Jeans</Text></Link>
                <Link><Text as="p" >Pants</Text></Link>
                <Link><Text as="p" >Shirts</Text></Link>
                < Divider p="1px" bg="gray.300"/>
                <Link><Text as="b" >Grooming & Cologne</Text></Link>
                <Link><Text as="p" >Body Care & Deodorant</Text></Link>
                <Link><Text as="p" >Cologne</Text></Link>
                <Link><Text as="p" >Dopp Kits & Toiletry Bags</Text></Link>
                <Link><Text as="p" >Gifts & Sets</Text></Link>
                <Link><Text as="p" >Hair Products</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px">
           <Button w="40px" bg="white" ml="200px"  fontSize="20px"  onClick={()=>setShow3(!show3)} ><Icon as={GrClose} /></Button>
                    <Box boxSize='sm'>
            <Image src='https://n.nordstrommedia.com/id/AMPID.pnghttps://n.nordstrommedia.com/id/db87be0d-11aa-4f6c-acd4-bb66e21001d9.jpg' alt='Nordstrom Annivesary' />
            </Box>
            <Link><Text mt="50px" as="p" textDecor="underline">Shop Now</Text></Link>
            </Flex>
         </Flex>
    )
 }
 function Toggle2(){
    return (
        <Flex w="100%" h="auto" m="auto"  zindex="5" p="40px 0px 40px 180px "  justifyContent="space-around" shadow="md">
            <Flex direction="column" gap="13px" minW="150px" overflow="wrap" >
                <Link ><Text as="b">Women: Get Inspired</Text></Link>
                 < Divider p="1px" bg="gray.300" />
                <Link ><Text as="b">New Arrivals</Text></Link>
                <Link ><Text as="b">ASOS</Text></Link>
                <Link ><Text as="b">Black-Owned & - Founded Brands</Text></Link>
                <Link ><Text as="b">Contemporary</Text></Link>
                <Link ><Text as="b">Nordstrom Made</Text></Link>
                <Link ><Text as="b">Parachute x Pop-In@Nordstrom</Text></Link>
                <Link ><Text as="b">Shop by Trend</Text></Link>
                <Link ><Text as="b">Sports Fan Shop</Text></Link>
                <Link ><Text as="b">Sustainable Style</Text></Link>
                <Link ><Text as="b">TOPSHOP</Text></Link>
                <Link ><Text as="b">Wedding Shop</Text></Link>
                <Link ><Text as="b">Women's Looks</Text></Link>
                <Link ><Text as="b">Shop by Occasion</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
                <Link><Text as="b" >Clothing</Text></Link>
                <Link><Text as="p" >Activewear</Text></Link>
                <Link><Text as="p" >Blazers, Suits & Separates</Text></Link>
                <Link><Text as="p" >Coats & Jackets</Text></Link>
                <Link><Text as="p" >Dresses</Text></Link>
                <Link><Text as="p" >Jeans & Denim</Text></Link>
                <Link><Text as="p" >Lingerie, Hosiery & Shapewear</Text></Link>
                <Link><Text as="p" >Pants & Leggings</Text></Link>
                <Link><Text as="p" >Shorts</Text></Link>
                <Link><Text as="p" >Skirts</Text></Link>
                <Link><Text as="p" >Sleepwear & Robes</Text></Link>
                <Link><Text as="p" >Sweatshirts & Hoddies</Text></Link>
                <Link><Text as="p" >Swimsuits & Cover-Ups</Text></Link>
                <Link><Text as="p" >Tops</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
                <Link><Text as="b" >Shoes</Text></Link>
                <Link><Text as="b" >Booties</Text></Link>
                <Link><Text as="p" >Boots</Text></Link>
                <Link><Text as="p" >Clogs</Text></Link>
                <Link><Text as="p" >Comfort</Text></Link>
                <Link><Text as="p" >Dress Shoes</Text></Link>
                <Link><Text as="p" >Espadrilles</Text></Link>
                <Link><Text as="p" >Flats</Text></Link>
                <Link><Text as="p" >Heels</Text></Link>
                <Link><Text as="p" >Mules & Slides</Text></Link>
                <Link><Text as="p" >Oxfords & Loafers</Text></Link>
                <Link><Text as="p" >Running Shoes</Text></Link>
                <Link><Text as="p" >Sandals</Text></Link>
                <Link><Text as="p" >Slippers</Text></Link>
                <Link><Text as="p" >Sneakers & Athletic</Text></Link>
                <Link><Text as="p" >Shoe Care & Accessories</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
                <Link><Text as="b" >Handbags</Text></Link>
                <Link><Text as="p" >Backpacks</Text></Link>
                <Link><Text as="p" >Belt Bags</Text></Link>
                <Link><Text as="p" >Bucket Bags</Text></Link>
                <Link><Text as="p" >Camera Bags</Text></Link>
                <Link><Text as="p" >Clutches & Pouches</Text></Link>
                <Link><Text as="p" >Crossbody Bags</Text></Link>
                <Link><Text as="p" >Designer Bags</Text></Link>
                <Link><Text as="b" >Satchels</Text></Link>
                <Link><Text as="p" >Shoulder Bags</Text></Link>
                <Link><Text as="p" >Straw Bags</Text></Link>
                <Link><Text as="p" >Tote Bags</Text></Link>
                <Link><Text as="p" >Wallets & Cars Cases</Text></Link>
                < Divider p="1px" bg="gray.300"/>
                <Link><Text as="b" >Luggage & Travel</Text></Link>
                <br />
                <Link><Text as="b" >Tech Accessories</Text></Link>
                <Link><Text as="p" >Headphones</Text></Link>
                <Link><Text as="p" >Phone Cases</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
                <Link><Text as="b" >Jewelry</Text></Link>
                <Link><Text as="p" >Bracelets</Text></Link>
                <Link><Text as="p" >Earrings</Text></Link>
                <Link><Text as="p" >Necklaces</Text></Link>
                <Link><Text as="p" >Rings</Text></Link>
                <Link><Text as="p" >Watches</Text></Link>
                < Divider p="1px" bg="gray.300"/>
                <Link><Text as="b" >Fine Jewelry</Text></Link>
                <Link><Text as="p" >Experience Fine Jewelry</Text></Link>
                < Divider p="1px" bg="gray.300"/>
                <Link><Text as="b" >Accessories</Text></Link>
                <Link><Text as="p" >Belts</Text></Link>
                <Link><Text as="p" >Hair Accessories</Text></Link>
                <Link><Text as="p" >Hats</Text></Link>
                <Link><Text as="p" >Hijabs and Headscarves</Text></Link>
                <Link><Text as="p" >Scarves & Wraps</Text></Link>
                <Link><Text as="p" >Sunglasses &  Eyewear</Text></Link>
            </Flex>
            <Flex direction="column" gap="10px">
           <Button w="40px" bg="white" ml="200px" mb="50px" fontSize="20px"  onClick={()=>setShow2(!show2)} ><Icon as={GrClose} /></Button>
                    <Box boxSize='sm'>
            <Image src='https://n.nordstrommedia.com/id/a6d3c20a-8900-4c47-bcc1-d8facc72c178.jpg' alt='Nordstrom Annivesary' />
            </Box>
            <Link><Text as="p" textDecor="underline">Shop Now</Text></Link>
            </Flex>
         </Flex>
    )
 }
 let theme = {
    bg:"white"
 }

 return (
        <>
    <Flex  w='80%' m="auto" pt="10px"  justifyContent="space-between">
        <UnorderedList  listStyleType="none" display="flex" w="100%" justifyContent="space-between">
             <ListItem><Button bg="white"  fontWeight="400" _hover={theme} onClick={handleshow}>Anniversary Sale</Button></ListItem>
             <ListItem><Button onClick={handleshow2} bg="white" fontWeight="400"   _hover={theme}>Women</Button></ListItem>
             <ListItem><Button bg="white" fontWeight="400"  _hover={theme} onClick={handleshow3} >Men</Button></ListItem>
             <ListItem><Button bg="white" fontWeight="400"  _hover={theme}onClick={handleshow2} >Kids</Button></ListItem>
             <ListItem><Button bg="white" fontWeight="400"  _hover={theme} onClick={handleshow}>Young Adult</Button></ListItem>
             <ListItem><Button bg="white" fontWeight="400"  _hover={theme} onClick={handleshow}>Activewear</Button></ListItem>
             <ListItem><Button bg="white" fontWeight="400"  _hover={theme} onClick={handleshow3}>Home</Button></ListItem>
             <ListItem><Button bg="white" fontWeight="400"  _hover={theme} onClick={handleshow2}>Beauty</Button></ListItem>
             <ListItem><Button bg="white" fontWeight="400"  _hover={theme} onClick={handleshow3}>Designer</Button></ListItem>
             <ListItem><Button bg="white" fontWeight="400"  _hover={theme} onClick={handleshow}>Gifts</Button></ListItem>
             <ListItem><Button bg="white" fontWeight="400"  _hover={theme} onClick={handleshow3}>Sale</Button></ListItem>
        </UnorderedList>
        </Flex>
        {show && <Toggle/> }
        {show2 && <Toggle2/> }
        {show3 && <Toggle3/> }
        </>
  )
}
