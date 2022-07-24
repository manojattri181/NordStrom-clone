import { Box } from '@chakra-ui/react'
import React from 'react'
import Img1 from '../ImageSection/Img1'
import Img2 from '../ImageSection/Img2'
import Img3 from '../ImageSection/Img3'
import Img4 from '../ImageSection/Img4'
import Productgift from '../ProductSection/Productgift'
import Productmen from '../ProductSection/Productmen'
import ProductSlider from '../ProductSection/ProductSlider'
import Signin from '../SignIn/Signin'

export default function Home() {
  return (
     <Box>
         <Signin/>
         <Img1 />
         <Img2 />
          <Productmen />
         <Img3 />
         <ProductSlider />
         <Img4 />
          <Productgift />
     </Box>
  )
}
