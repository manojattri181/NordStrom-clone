import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react'

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
  return (
    <Box w="100%"  m="auto"  p="9px 0px 10px" bg={b_data[showBanner].bg[0]} color={b_data[showBanner].bg[1]}>
    <Flex textAlign="centre" m="auto">
        <Box fontSize="14px"  ml="14rem" textAlign="centre">
        <Text as="p" ml="18rem" >
            <Text as="b" fontWeight="600">
            {b_data[showBanner].details}{" "}
                </Text>
            <Text as="span" textDecor="underline">
                {b_data[showBanner].learn}
            </Text>
            </Text> 
        </Box>
        <Spacer/>
        <Flex pr="100px" justifyContent="flex-end">
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
            </Box>
  )
}
