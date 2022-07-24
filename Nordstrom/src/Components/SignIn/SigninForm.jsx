import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    Link,
    InputGroup,
    InputRightElement,
    Checkbox,
  } from '@chakra-ui/react'
import { useRef, useState } from 'react'

export default function SigninForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    return (
       <>
            <Button bg="white" w="300px" mt="10px" border="1px solid black" borderRadius="0" p="24px 25px" onClick={onOpen}>Sign in or Create an Account</Button>
          
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
              isCentered
            >
              <ModalOverlay />
              <ModalContent p="20px" w="400px" borderRadius="0">
                <ModalHeader fontSize="32px" fontWeight="400" color="gray.600">Sign In</ModalHeader>
                <ModalHeader mt="-20px" fontSize="16px" fontWeight="400">New to Nordstrom? <Link textDecor="underline 1px">Create an account</Link></ModalHeader>
                <ModalCloseButton cursor='pointer' _hover={ {bg:"white"}}
                 pr="30px" pt="30px" fontSize="20px" color="gray.600" />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input ref={initialRef}  border="1px solid black" />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                required
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' bg="white" textDecor="underline 1px" size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                            <Link><Text textDecor="underline" mt="10px">Forgot Password?</Text></Link>
                            <Checkbox size="md" mt="10px" colorScheme='blue'>
                            Keep me signed in. <Link>Details</Link>
                        </Checkbox>
                  </FormControl>
                  <Text mt="20px" fontSize="smaller" pl="5px" w="280px" overflow="wrap">By signing in to your account, you agreee tp our <Text as="span">Privacy Policy</Text> and <Text as="span">Terms & Conditions.</Text></Text>
                </ModalBody>
                <ModalFooter pb="35px">
                  <Button bg='black' w="100%" borderRadius="0px" color="white" fontWeight="400"   mr={3}>
                    Save
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
}
