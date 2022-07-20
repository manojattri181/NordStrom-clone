import { Box, Divider, Flex, Icon, Image, Link, Text } from '@chakra-ui/react'
import {MdOutlinePhoneIphone} from "react-icons/md"
import {AiFillFacebook} from "react-icons/ai"
import {BsInstagram,BsPinterest} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
import {BiCopyright} from "react-icons/bi"

const row1 =["Contact Us" , "Order Status" ,"Shipping" ,"REturn Policy & Exchanges" ,
"Price Adjustments","Gift Cards","FAQ","Product Recalls"];
const row2 = ["Careers","Corporate Social Responsibility","Get Email Updates","Nordstrom Blog","The Thread","Nordy Podcast"];
const row3=["Find a Store","Free Style Help","Alternation & Tailoring" ,"Pop-In-Shop","Virtual Events","Spa Nordstrom","Nordstrom Restaurants","Nordstrom Local"];
const row4=["The Nordy Club","Pay My Bill","Manage My Nordstrom Card"];
const row5=["Nordstrom Rack","Nordstrom Canda","Investor Relation","Press Releases","Nordstrom Media Network"];
const last =["Privacy" ,"Do Not Sell My Personal Information","Term & Condition","Interest-Based Ads"]
export default function Footer() {
  return (
    <Box pb="40px" shadowTop="lg" >
    <Flex position="fixed" bottom="0px" w="100%" h="auto" m="auto"  bg="#f9f9f9" p="40px 200px 40px 180px " mb="30px" justifyContent="space-around" >
    <Flex direction="column" gap="13px" minW="150px" overflow="wrap" >
        <Link ><Text as="b">Customer Services</Text></Link>
         {
             row1.map((i)=>(
                <Link><Text as="p" >{i}</Text></Link>
            ))
         }
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
    <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
        <Link><Text as="b" >About Us</Text></Link>
        {
             row2.map((i)=>(
                <Link><Text as="p" >{i}</Text></Link>
            ))
         }
    </Flex>
    <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
        <Link><Text as="b" >Stores & Services</Text></Link>
        {
             row3.map((i)=>(
                <Link><Text as="p" >{i}</Text></Link>
            ))
         }
    </Flex>
    <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
        <Link><Text as="b" >Nordstrom Card & Rewards</Text></Link>
        {
             row4.map((i)=>(
                <Link><Text as="p" >{i}</Text></Link>
            ))
         }
    </Flex>
    <Flex direction="column" gap="10px" minW="150px" overflow="wrap" >
        <Link><Text as="b" >Jewelry</Text></Link>
        {
             row5.map((i)=>(
                <Link><Text as="p" >{i}</Text></Link>
            ))
         }
    </Flex>
    <Box>
        <Flex alignContent="center">
            <Icon fontSize="22px" as={MdOutlinePhoneIphone}/> 
            <Text as="p">Get our apps</Text>
        </Flex>
        <Flex w="100px" mt="30px" gap="10px">
            <Icon _hover={{color:"yellow.500"}} fontSize="22px" as={BsInstagram} />
            <Icon _hover={{color:"brown.500"}} fontSize="22px" as={BsPinterest} />
            <Icon _hover={{color:"blue.400"}} fontSize="22px" as={AiFillFacebook} />
            <Icon _hover={{color:"blue.400"}} fontSize="22px" as={FaTwitter} />
        </Flex>
    </Box>
    </Flex>
    <Flex  position="fixed"  bottom="0px" w="50%" ml="160px"  p="10px" justifyContent="space-evenly" bg="#f9f9f9" >
    {
             last.map((i)=>(
                <Link><Text as="p" fontSize="14px" >{i}</Text></Link>
                ))
            }
            <Link><Text as="p" fontSize="14px" >
                <Icon as={BiCopyright}/>2022 Nordstrom, Inc.</Text></Link>

    </Flex>
    </Box>
  )
}
