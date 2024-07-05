import React from 'react'
import './index.css'
import ReactCarousel from 'react-multi-carousel'
import data from '../../assests/data/data'
const Slider = (props) => {
  //   const responsive = {
  //     superLargeDesktop: {
  //       breakpoint: { max: 4000, min: 3000 },
  //       items: 5,
  //     },
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 5,
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 2,
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 1,
  //     },
  //   }
  return (
    <div className=" pointer">
      <ReactCarousel
        responsive={props.responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
      >
        {props.data.map((val, id) => {
          return (
            <div
              style={{
                border: props.border || '',
                textAlign: 'center',
                display: props.display || '',
                placeItems: props.placeitems || '',
                alignItems: props.alignitems || '',
                border: props.border || '',
              }}
              className={props.className || ''}
            >
              <img
                src={val.img}
                width={props.width || ''}
                height={props.height || ''}
                className={`${props.csi}`}
              />
            </div>
          )
        })}
      </ReactCarousel>
    </div>
  )
}

export default Slider
