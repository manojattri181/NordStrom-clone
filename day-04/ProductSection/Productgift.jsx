import { Badge, Box, Icon, Image, Text } from '@chakra-ui/react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import {GrCaretNext,GrCaretPrevious} from "react-icons/gr"
import { StarIcon } from '@chakra-ui/icons';
export default function Productgift() {
 const [Data, setData] = useState([]) 

useEffect(() => {
   axios.get('https://json-server-manoj-api.herokuapp.com/posts').then((res)=>{
       setData(res.data);
    })
}, [])

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
      <Icon color="blue" w="30px" h="40px" border="1px solid gray" fontSize="30px" as={GrCaretNext} />
    )
  }
  function ArrowPrevious(){
    return (
      <Icon color="blue" w="30px" h="40px" border="1px solid gray" fontSize="30px" as={GrCaretPrevious} />
    )
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Box className="product" mt="50px" mb="100px">
    <Slider {...settings}>
        {
          Data.map((items ,i)=>(
            <Box key={i} textAlign="center" >
                 <Badge colorScheme='red' variant='outline' float="left" p="1px 4px" >Limited offer only</Badge>
              <Image className="imgP" width="400px" height="300px"  src={items.src} alt={i+1} />
              <Text>{items.name}</Text>
              <Text color="red" as="p" fontWeight="500">INR {items.price[0]}
            {"  "} <Text as="span">(Extra {items.discount}% off)</Text>
              </Text>
              {new Array(5).fill("").map((_, i) => (
              <StarIcon
                key={i}
                color={i < Math.ceil(items.ratign) ? "yellow.400" : "gray.300"}
              />
            ))}
            </Box>
          ))
        }
    </Slider>
  </Box>
  )
}
