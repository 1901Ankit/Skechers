import React from 'react'
import Carousel from 'react-multi-carousel'

const Productslider = (props) => {
  return (
    <div className=" pointer" style={{ height: props.divh }}>
      <Carousel
        responsive={props.responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={false}
        draggable={true}
        arrows={true}
        infinite={true}
      >
        {props.data.map((val, id) => {
          return (
            <div key={id}  className="border p-2 me-2">
              <img
                src={val.img}
                width={props.width || ''}
                height={props.height || ''}
                className=" p-5 border-bottom"
              />
              <p className='text-justify'>{val.brand}</p>
              <p>{val.gender}</p>
              <p className='f-14'>{val.desc}</p>
              <p className="fw_bold"> AED {val.price}</p>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Productslider
