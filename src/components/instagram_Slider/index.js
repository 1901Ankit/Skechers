import React from 'react'
import data from '../../assests/data/data'
import Slider from '../slide'
import './index.css'
const Instagramslider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div className='instagram_slider'>
      <Slider data={data.sliderimage} responsive={responsive}  className="instagram_img" csi="insta_img" />
    </div>
  )
}

export default Instagramslider
