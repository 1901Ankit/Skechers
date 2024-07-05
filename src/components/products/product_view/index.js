import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import glidestep from '../../../assests/image/glidestep3.png'
import React from 'react'
import { useState } from 'react'
import './index.css'
import { Carousel } from 'react-responsive-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import {
  CarouselProvider,
  ImageWithZoom,
  Slide,
  Slider,
} from 'pure-react-carousel'
import ReactModal from 'react-modal'
import { useLocation } from 'react-router-dom'

const Productview = (props) => {
  let [show, setShow] = useState(false)
  const handleshow = () => {
    setShow(true)
  }
  const handleclose = () => {
    setShow(false)
  }
  const location=useLocation()
  // console.log("loca",location)

  return (
    <div
      className={props.className || ''}
      onKeyDownCapture={() => {
        setShow(false)
      }}
    >
      <div className="product_view">
        {props.data.map((val, id) => {
          return (
            <div
              key={id}
              style={{
                marginRight: props.marginRight,
                width: props.width,
                height: props.height,
                display: 'grid',
                placeItems: 'center',
                alignItems: 'center',
                border: props.border || '',
              }}
            >
              <img
                src={location.state.img}
                width={props.imgwidth}
                className={props.className}
                onClick={handleshow}
              />
            </div>
          )
        })}
      </div>
      {show ? (
        <div>
          {/* <div className="modal__img" onKeyDown={handlekeypreess}>
            <span
              className="close"
              onClick={() => {
                setShow(false)
              }}
            >
              <FontAwesomeIcon icon={faClose} />
            </span>
            <Carousel
              showThumbs={false}
              showArrows={false}
              showStatus={true}
              dynamicHeight={true}
          className="pure_carousel"
            >
              {props.data2.map((val, i) => {
                return (
                  <img
                    key={i}
                    src={val.img}
                    style={{ width: '700px', height: 'inherit' }}
                  />
                )
              })}
            </Carousel>
           
          </div> */}
          <ReactModal isOpen={show} onRequestClose={handleclose}>
            <Carousel
              showThumbs={false}
              showArrows={true}
              showStatus={true}
              dynamicHeight={true}
             showIndicators={false}
            >
              {props.data2.map((val, id) => {
                return (
                  <img
                    key={id}
                    src={location.state.img}
                    style={{ width: '700px', height: 'inherit' }}
                  />
                )
              })}
            </Carousel>
          </ReactModal>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Productview
