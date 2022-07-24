import { Badge, Box, Button, Icon, Text,  useToast } from '@chakra-ui/react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import {GrCaretNext,GrCaretPrevious} from "react-icons/gr"
import {FiHeart} from "react-icons/fi"
import { StarIcon } from '@chakra-ui/icons';
import  '../../App.css'
export default function Productmen() {
 const [Data, setData] = useState([]) 
 const toast = useToast()

 useEffect(() => {
   axios.get('https://json-server-manoj-api.herokuapp.com/posts?q=men').then((res)=>{
       setData(res.data);
    })
}, [])

function addtocart(data){
  console.log(data);
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

function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <ArrowForward />
      </div>
    );
  }
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <ArrowPrevious />
      </div>
    );
  }
  
  function ArrowForward(){
    return (
      <Icon color="blue" w="35px" h="150px" mt="-180px" px="5px" ml="-10px" _hover={{border:"1px solid gray",bg:"gray.100"}} fontSize="30px" as={GrCaretNext} />
    )
  }
  function ArrowPrevious(){
    return (
      <Icon color="black"  w="35px" h="150px" px="5px" mt="-180px" mr="10px" _hover={{border:"1px solid gray",bg:"gray.100"}} fontSize="30px" as={GrCaretPrevious} />
    )
  }
  const settings = {
    dots: false,
    infinite: true,
    // autoplay:true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll:1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box className="product" mt="50px" mb="100px" >
    <Slider {...settings} >
        {
          Data.splice(0,9).map((items ,i)=>(
            <Box key={i} textAlign="center" p="15px" position={"relative"} >
                 <Badge colorScheme='green' variant='subtle' position={"absolute"} zIndex="12" right="10" top="1" p="3px" fontSize="12px" >{items.new_collection ? "New" : "Limited Stock"}
                 </Badge>
                  <Icon as={FiHeart} position="absolute"  right="0" fontSize={"20px"} top="1"/>
                  <Box className='imageContainer'>
                        <img objectfit="contain"  width="400px" height="300px" src={items.avatar[0]} alt={i+1} />
                        <img  className="image-hover" objectfit="contain"  width="400px" height="300px" src={items.avatar[1]} alt={i+1} />
                  </Box>
                <Text as="i" fontWeight="500" width="300px" textAlign={"center"} mb="-20px" display={"block"} h="26px"  overflow="hidden" >{items.name}</Text>
                <br />
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
            <Button display={"flex"} m="auto" mt="10px" bg="black" color={"white"} w="80%" _hover={{bg:"gray"}} onClick={()=>addtocart(items)} >Add to Cart</Button>
            </Box>
          ))
        }
    </Slider>
  </Box>
  )
}
