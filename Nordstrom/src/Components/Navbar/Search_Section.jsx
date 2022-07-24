import { Box,Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Icon, Image, Input, InputGroup, InputLeftElement, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, useDisclosure} from '@chakra-ui/react'
import {BiSearchAlt,BiHeart,BiStore,BiCrosshair,BiLockAlt} from "react-icons/bi"
import {FaMoneyCheckAlt,FaShippingFast} from "react-icons/fa"
import {MdOutlinePayment,MdOutlineMailOutline} from "react-icons/md"
import {BsBoxArrowUpRight} from "react-icons/bs"
import {IoLogoTux} from "react-icons/io"
import {FaTrashAlt} from "react-icons/fa"
import {RiShoppingCartLine} from "react-icons/ri"
import {TiShoppingCart} from "react-icons/ti"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Search_Section() {

    const toast = useToast();
    const navigate =useNavigate();
    const [cartData,setCartData] = useState([]);
    
//  cart drawer left side 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef();

  function getdata(){
    axios.get(`https://json-server-manoj-api.herokuapp.com/cart`).then((res)=>{
        setCartData(res.data);
    })
  }
  useEffect(()=>{
    getdata()
  },[])

//   useEffect(()=>{
//     deleteCart();
// },[])

 function deleteCart(id){
    // console.log("called Delete function")
    axios.delete(`https://json-server-manoj-api.herokuapp.com/cart/${id}`).then(()=>{
        toast({
            title: 'Product is Removed Successfull',
            position:"top",
            status: 'error',
            duration: 2000,
            isClosable: false,
          })
    }).then(()=>getdata())
 }

 
 
 function CartContainer(){
        
    let sum=0;
    cartData.forEach((i)=>{
        sum+= +i.price
    })
        return(
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton fontSize={"20px"} mr="20px" mt="10px" />
                <DrawerHeader fontSize={"25px"}>
                <Icon as={RiShoppingCartLine} mr="4px" fontSize={"30px"} />
                    CART 
                </DrawerHeader>

                <DrawerBody>
                     {   
                        cartData.map((items,i)=>(
                            <Flex   justifyContent="space-around" p="5px" alignContent={"centre"}>
                        <Image objectfit="contain"  width="100px" src={items.avatar[0]} alt={"Image not Found"} />
                             <Flex direction="column" >
                           <Text as="p" fontWeight="500" w="100px" h="28px"  overflow="hidden" >{items.name}</Text>
                           <Text as="i" fontSize="11px" >{items.brand}</Text>
                           <Text color="red" as="p">INR ₹ {items.price}
                           </Text>
                             </Flex>
                       <Button  m="auto" mt="4" bg="red.600" color={"white"} w="50px" _hover={{bg:"red"}}  onClick={()=>deleteCart(items.id)} ><Icon as={FaTrashAlt} /></Button>
                       </Flex>
                        ))
                    }
                </DrawerBody>
                <Flex p="10px" w="80%" m="auto" alignContent={"center"}  justifyContent={"space-between"}>
                      <Text as="b" fontSize="20px">SUB-TOTAL :</Text>
                      <Text as="b" fontSize="20px" color={"green.700"}>₹{sum}</Text>
                </Flex>
                    <Divider p="1px" bg="gray.400" />
                <DrawerFooter>
                    <Button  mr={3} colorScheme="blue" onClick={onClose}>
                    Continue Shopping
                    </Button>
                    <Button colorScheme='green'>Checkout</Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        )
    }


    function home(){
        navigate('/');
    }
  return (
    <Box w="80%" m="auto" position={"sticky"} top="0" bg="white" zIndex="120">
    <Flex p="25px" alignItems='center' justifyContent="space-between" >
         <Box  onClick={home}>
            <Image maxW="200px" cursor={"pointer"}  ml="-22px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV9cYLbnVuB1U56S9KQXp336zHLzG_9I75g&usqp=CAU' alt='NordStrom' />
            </Box>
           < Spacer/>
            <Box pl="30px" w="50%">
            <InputGroup >
                    <InputLeftElement
                    pointerEvents='none'
                    children={ <Icon fontSize="25px" as={BiSearchAlt} />}
                    />
                    <Input type='text' placeholder='Search for Product or brands' />
                </InputGroup>
            </Box>
            <Spacer />
            <Flex>
            <Box>
            <Menu>
                <MenuButton  px={4}
                        py={2}
                        bg="white"
                        transition='all 0.4s'
                        borderRadius='md'
                        _expanded={{ bg: 'white' }}
                        as={Button} rightIcon={<ChevronDownIcon />}>
                    Sign In
                </MenuButton> 
                <MenuList p="5px" ml="-5rem" >
                     <MenuItem m="auto" my="3px" minH='28px' w="80%" bg="black" color="white" _hover={{bg:"black",color:"white"}}>
                            <Link fontSize="18px">Sign In | Create Account</Link>
                    </MenuItem>
                    <MenuItem minH='38px'  >
                            <Link as="b" _hover={{textDecor:"underline"}}>Your Account</Link>
                    </MenuItem>
                    <MenuItem minH='38px'>
                        <Icon mx="10px" as={FaMoneyCheckAlt}/>
                            <Link _hover={{textDecor:"underline"}} >Purchases</Link>
                    </MenuItem>
                    <MenuItem minH='38px'>
                        <Icon mx="10px" as={BiHeart}/>
                            <Link _hover={{textDecor:"underline"}} >Wishlist</Link>
                    </MenuItem>
                    <MenuItem minH='38px'>
                        <Icon mx="10px" as={IoLogoTux}/>
                            <Link _hover={{textDecor:"underline"}} >The Nordy Club Rewards</Link>
                    </MenuItem>
                    <MenuItem minH='38px'>
                        <Icon mx="10px" as={FaShippingFast}/>
                            <Link _hover={{textDecor:"underline"}} >Shipping Addresses</Link>
                    </MenuItem>
                    <MenuItem minH='38px'>
                        <Icon mx="10px" as={MdOutlinePayment}/>
                            <Link _hover={{textDecor:"underline"}} >Payment Methods</Link>
                    </MenuItem>
                    <MenuItem minH='38px'>
                        <Icon mx="10px" as={BiCrosshair}/>
                            <Link _hover={{textDecor:"underline"}} >Looks</Link>
                    </MenuItem>
                    <MenuItem minH='38px'>
                        <Icon mx="10px" as={BsBoxArrowUpRight}/>
                            <Link _hover={{textDecor:"underline"}} >Pay & Manage Nordstrom Card</Link>
                    </MenuItem>
                    <MenuItem minH='38px'>
                            <Link _hover={{textDecor:"underline"}} >Account Settings</Link>
                    </MenuItem>
                    <MenuItem minH='38px'>
                        <Icon mx="10px" as={BiLockAlt}/>
                            <Link _hover={{textDecor:"underline"}} >Password & Personal Info</Link>
                    </MenuItem>
                    <MenuItem minH='38px'>
                        <Icon mx="10px" as={MdOutlineMailOutline}/>
                            <Link _hover={{textDecor:"underline"}} >Email & Mail Preferences</Link>
                    </MenuItem>
                    <MenuItem minH='38px'>
                        <Icon mx="10px" as={BiStore}/>
                            <Link _hover={{textDecor:"underline"}} >Stores & Events</Link>
                    </MenuItem>
                    <MenuItem minH='38px' >
                            <Link _hover={{textDecor:"underline"}}  as="b">We're here to help, 24/7</Link>
                    </MenuItem>
                    <MenuItem minH='38px'>
                            <Link _hover={{textDecor:"underline"}} >Contact Us</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            </Box>
            <Box position="relative"  >
                <Button ref={btnRef} colorScheme='teal' onClick={onOpen}> 
                <Icon cursor="pointer" as={TiShoppingCart} fontSize="28px"/>

                </Button>
                {/* <Text position="absolute" fontWeight="600" fontSize="24px" top="-18px" right="-15px" color="black" >{cartData.length}</Text> */}
                {/* cart drawer left side */}
              <CartContainer /> 
            
            </Box>
         </Flex>
    </Flex>
         <Divider p="0.6px" bg="gray.400" orientation='horizontal' />
         </Box>
  )
}
