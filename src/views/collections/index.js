import React from 'react'
import data from '../../assests/data/data'
import Banner from '../../components/banner'
import Shop from '../../components/shop'

const Collections = () => {
  return (
    <div>
      {/* <Banner data={data.collectionbanner}  height="40vh"/> */}
      <Shop data={data.collection} className="custom_btn"  class="banner_img" mb="10px" justifycontent="center"/>
    </div>
  )
}

export default Collections
