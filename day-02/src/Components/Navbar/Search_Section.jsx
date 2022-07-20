import { Box,Button, Container, Divider, Flex, Icon, Image, Input, InputGroup, InputLeftElement, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Text} from '@chakra-ui/react'
import {BiSearchAlt,BiHeart,BiStore,BiCrosshair,BiLockAlt} from "react-icons/bi"
import {FaMoneyCheckAlt,FaShippingFast} from "react-icons/fa"
import {MdOutlinePayment,MdOutlineMailOutline} from "react-icons/md"
import {BsBoxArrowUpRight} from "react-icons/bs"
import {IoLogoTux} from "react-icons/io"
import {TiShoppingCart} from "react-icons/ti"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useState } from 'react'
export default function Search_Section() {
    const [cart_Items,setCartitems] = useState(0);
    function x(){
        return(
            <Container w="300px" h="800px">
                Your pushase
            </Container>
        )
    }
  return (
    <Box w="80%" m="auto">
    <Flex p="25px" alignItems='center' justifyContent="space-between" >
         <Box >
            <Image maxW="200px" ml="-22px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV9cYLbnVuB1U56S9KQXp336zHLzG_9I75g&usqp=CAU' alt='NordStrom' />
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
            <Box position="relative">
                <Icon cursor="pointer" as={TiShoppingCart} fontSize="28px"/>
                <Text position="absolute" fontWeight="600" mt="-42px" mx="26px" z-zindex="2">{cart_Items}</Text>
            </Box>
         </Flex>
    </Flex>
         <Divider p="0.6px" bg="gray.400" orientation='horizontal' />
         </Box>
  )
}
