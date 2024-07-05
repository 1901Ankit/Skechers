import React from 'react'
import Button from '../button'
import { Link } from 'react-router-dom'
const View = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          height: props.bgheight,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center',
          width: props.imgwidth || '',
          border: props.Border,
          marginBottom: props.mb || '',
          alignItems: 'end',
          borderRight: props.borderright || '',
        }}
        className={props.class}
      >
        <div className="container-fluid ">
          <div className="row  ms-5 " style={{ marginBottom: '5%' }}>
            <div
              className="col-sm-12 "
              style={{ marginLeft: props.margin || '' }}
            >
              <div
                style={{
                  marginLeft: props.Marginleft,
                  marginBottom: props.marginbottom || '',
                }}
              >
                <p className="text-uppercase text-white">
                  {props.subheading || ''}
                </p>
                <h4 className="text-uppercase text-white">
                  {props.heading || ''}
                </h4>

                <Button
                  backgroundColor="#002d55"
                  transform="Uppercase"
                  padding={props.padding}
                  fontsize={props.btnfs}
                  classname={props.className}
                  width={props.width}
                  color="#ffffff"
                  marginright={props.marginright}
                  marginleft={props.marginLeft}
                  onClick={props.onclick}
                  border={props.border}
                >
                  {props.button}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
