import { Box, Flex, Heading } from '@chakra-ui/react'
import SigninForm from './SigninForm'

export default function Signin() {
  return (
    <Flex direction="column" gap="10px" m="auto" >
   <Box  m="auto">
       <Heading fontSize="18px" ml="-5px" mt="20px" color="gray.600">Shop what you love-faster and easier</Heading>
   </Box>
        <Box  m="auto">
            <SigninForm/>
        </Box>
    </Flex>
  )
}
