import React from 'react'
const Banner = (props) => {
  return (
    <div>
      {props.data.map((val, id) => {
        return (
          <div
            style={{
              backgroundImage: `url(${val.img})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: props.height || '',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h2 className="text-white text-uppercase">{val.heading}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Banner
