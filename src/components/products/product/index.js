import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import './index.css'
import Wrapper from '../../wrapper'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
  // console.log('p', props)
  let [show, setShow] = useState(false)

  const favouritehandler = () => {
    setShow(!show)
  }
  return (
    <div className="pointer">
      <div>
        <Wrapper
          link={props.Link}
          data={props.data}
          className="text-decoration-none link"
        >
          <div className="product  mt-2">
            <div
              className="border p-1 m-auto "
              style={{ width: 'fit-content' }}
            >
              <div className=" hearticon">
                {!show ? (
                  <AiOutlineHeart onClick={favouritehandler} />
                ) : (
                  <FontAwesomeIcon icon={faHeart} color="red" onClick={favouritehandler} />
                )}
              </div>
              <img src={props.data.img} width="100%" alt={'product image'} />
            </div>
            <div className=" mt-2" style={{ marginLeft: props.ml }}>
              <p className="text-uppercase f-17" style={{ fontWeight: '700' }}>
                {props.data.brand}
              </p>
              <p
                style={{
                  color: '#333',
                  fontWeight: '800',
                  textTransform: 'capitalize',
                }}
              >
                {props.data.gender}
              </p>
              <p className="f-13">{props.data.desc}</p>
              <p className="fw_bold text-dark"> AED {props.data.price}</p>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  )
}

export default Product
