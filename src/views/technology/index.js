import React from 'react'
import data from '../../assests/data/data'
import Banner from '../../components/banner'
import Shop from '../../components/shop'
import './index.css'
const Technology = () => {
  return (
    <div>
      {/* <Banner data={data.technologybanner} height="40vh" /> */}
      <Shop data={data.technology} className="fw_semibold "  class="banner_img"  mb="10px" justifycontent="center" />
    </div>
  )
}

export default Technology
