import React from 'react'
import Button from '../button'
import './index.css'
const Shop = (props) => {
  return (
    <div>
      {props.data.map((val, i) => {
        return (
          <div
            style={{
              backgroundImage: `url(${val.img})`,
              height: '100vh',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'grid',
              placeItems: 'end',
              alignItems: 'end',
              justifyContent:props.justifycontent,
              marginBottom:props.mb || ""
            }}
            className={props.class || ''}
          >
            <div className="container mb-5 pb-5">
              <div className="row">
                <div className="col-sm-4">
                  {/* <Button
                    backgroundColor="transparent"
                    transform="Uppercase"
                    color="#ffffff"
                    padding="2%"
                    border="2px solid #ffffff"
                    width="200px"
                    classname={`   shop_btn +${props.className || ''}`}
                  >
                    {val.button}
                  </Button> */}
                  {/* <h2
                    className={`text-white fw_bold shopheading + ${
                      props.classname || ''
                    } `}
                  >
                    {val.heading}
                  </h2> */}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 text-center">
                  <div className="d-flex justify-content-center align-items-center ">
                    <Button
                      backgroundColor="#002d55"
                      transform="Uppercase"
                      color="#ffffff"
                      padding="3%"
                      border="1px solid #002d55"
                      width="200px"
                      classname={`fw_semibold custom_btn shop_btn `}
                      marginleft="15px"
                    >
                      {val.button1}
                    </Button>
                    {/* <Button
                      backgroundColor="transparent"
                      transform="Uppercase"
                      color="#ffffff"
                      padding="3%"
                      border="2px solid #ffffff"
                      width="200px"
                      classname="fw_semibold ms-4 custom_btn"
                    >
                      {val.button2}
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Shop
