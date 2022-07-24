import { Box, Icon, Image} from "@chakra-ui/react";
import Slider from "react-slick";
import {GrCaretNext,GrCaretPrevious} from "react-icons/gr"
import "./product.css"

export default function ProductSlider() {
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
      <Icon color="blue" w="30px" h="100px" border="1px solid gray" fontSize="30px" as={GrCaretNext} />
    )
  }
  function ArrowPrevious(){
    return (
      <Icon color="blue" w="30px" mr="10px" h="100px" border="1px solid gray" fontSize="30px" as={GrCaretPrevious} />
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

  };

  let data =[ 
    {
      src:"https://n.nordstrommedia.com/id/sr3/45d24701-0c3e-4faf-b1d9-c0d620c780a6.jpeg?q=45&dpr=2&h=365.31&w=230"
    },
    {
      src:"https://n.nordstrommedia.com/id/sr3/afa33a59-6c68-48f7-b7e5-93c108595641.jpeg?q=45&dpr=2&h=365.31&w=230"
    },
    {
      src:"https://n.nordstrommedia.com/id/sr3/efe21421-3dc3-434d-9f9c-db0211269e63.jpeg?q=45&dpr=2&h=365.31&w=230"
    },
    {
      src:"https://n.nordstrommedia.com/id/sr3/31cd51b7-a686-4a32-b2b5-6dc8720eea57.jpeg?q=45&dpr=2&h=365.31&w=230"
    },
    {
      src:"https://n.nordstrommedia.com/id/sr3/cbd76871-c4a1-4c27-b819-f857e01b8974.jpeg?q=45&dpr=2&h=365.31&w=230"
    },
    {
      src:"https://n.nordstrommedia.com/id/sr3/f061852a-a21c-41cb-93af-4f046f09b28e.jpeg?q=45&dpr=2&h=365.31&w=230"
    },
    {
      src:"https://n.nordstrommedia.com/id/sr3/96dce571-cc83-4afe-83c2-51f5ca711ac1.jpeg?q=45&dpr=2&h=365.31&w=230"
    },
    {
      src:"https://n.nordstrommedia.com/id/sr3/ba4ddc5f-91ff-45a7-9198-999b8e39209a.jpeg?q=45&dpr=2&h=365.31&w=230"
    }
    ]
    return (
      <Box className="product" mt="50px">
        <Slider {...settings}>
            {
              data.map((items ,i)=>(
                <Box key={i}>
                  <Image className="imgP" src={items.src} alt={i+1} />
                </Box>
              ))
            }
        </Slider>
      </Box>
    );
}
