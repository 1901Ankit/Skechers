import React, { useState } from 'react'
import Banner from '../../components/banner'
import Productview from '../../components/products/product_view'
import product_description from '../../assests/data/constant'
import './index.css'
import Size from '../../components/products/size_box'
import Counter from '../../components/products/counter'
import Button from '../../components/button'
import { FiHeart } from 'react-icons/fi'
import Productstory from '../../components/products/product_story'
import Producthighlights from '../../components/products/product_highlights'
import data from '../../assests/data/data'
import Breadcrumps from '../../components/breadcrumps'
import { useLocation } from 'react-router-dom'
import 'pure-react-carousel/dist/react-carousel.es.css'
import Productslider from '../../components/products/productslider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import coming from '../../assests/image/main/wetransfer_216491-bbk_2023-01-05_0928/newbanners/comingsoon.gif'
import { Carousel } from 'react-responsive-carousel'
import Imagezoom from 'react-image-zooom'
import { Player } from 'video-react'
import { Modal } from 'react-bootstrap'
import ReactLoading from 'react-loading'
import product_details from '../../assests/data/product_details'
const ProductDetails = () => {
  const location = useLocation()
  console.log('state', location)
  const pathname = location.pathname.split('/')
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
  const shoeresponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  let [show, setShow] = useState(false)

  const showhandler = () => {
    setShow(!show)
  }

  let [shown, setShown] = useState(false)

  const shownhandler = () => {
    setShown(!shown)
  }
  let [heart, setHeart] = useState(false)

  const showheart = () => {
    setHeart(!heart)
  }
  const arrowStyles = {
    position: 'absolute',
    zIndex: '2',
    top: '50%',
    cursor: 'pointer',
  }

  let [size, setSize] = useState(false)

  const sizecharthandler = () => {
    setSize(true)
  }
  // const location=useLocation()

  return (
    <div>
      {/* <Banner data={data.detailsbanner} height="40vh" /> */}
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-12"></div>
        </div>
        <div className="row">
          <div className="col-sm-6 ms-3 ">
            <Breadcrumps path={pathname} />

            <Carousel
              showThumbs={true}
              showArrows={true}
              showIndicators={false}
              showStatus={false}
              renderThumbs={() => {
                return location.state.thumbnails.map((val, id) => {
                  return (
                    <div className="d-flex align-items-center Border product_transition ">
                      <img src={val.thumnail} height="60vh" />
                    </div>
                  )
                })
              }}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <span className="carousel__arrow">
                    <FontAwesomeIcon
                      style={{ ...arrowStyles, left: '1' }}
                      title={label}
                      onClick={onClickHandler}
                      icon={faAngleLeft}
                      size="2x"
                    />
                  </span>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <span>
                    <FontAwesomeIcon
                      style={{ ...arrowStyles, right: '1' }}
                      title={label}
                      onClick={onClickHandler}
                      icon={faAngleRight}
                      size="2x"
                    />
                  </span>
                )
              }
            >
              {location.state.thumbnails.map((val, id) => {
                return val.type == 'image' ? (
                  <div className="">
                    <Imagezoom src={val.img} zoom="300" />
                    {/* <img src={val.img} /> */}
                  </div>
                ) : (
                  <div className="">
                    <Player playsInline poster={val.thumnail} src={val.img} />
                  </div>
                )
              })}
            </Carousel>
          </div>
          <div className="col-sm-4 my-4 ">
            <h3 className="text-uppercase fw_semibold fs-17">Skechers</h3>
            <p className="text-capitalize fw_bold f-20 ">
              {/* {product_description.product_description.heading1} */}
              {location.state.gender}
            </p>
            <p className="f-17 mb-3  text_secondary">
              {/* {product_description.product_description.description1} */}
              {location.state.desc}
            </p>
            <span className="fw_bold mb-1">AED {location.state.price}</span>
            <div className="mt-2 mb-4">
              <span className="text_secondary">
                {location.state.product_description}
              </span>
            </div>

            <div className="row mt-3 align-items-center">
              <div className="col-sm-6">
                <div className="row">
                  <span className="mb-2">Color</span>
                  {location.state.colordata.map((val, id) => {
                    return (
                      <div className="col-sm-2">
                        <div
                          className="color pointer"
                          style={{ backgroundColor: `${val.color}` }}
                        ></div>
                      </div>
                    )
                  })}
                  <div className="col-sm-2"></div>
                </div>
              </div>
              <div className="col-sm-6"></div>
            </div>

            <div className="sizecontainer my-3">
              <Size data={data.Size} className="pointer " />
            </div>
            <div className="sizecontainer my-2">
              <Size data={data.sizedata} className="pointer" />
            </div>
            <h6 className="size_guide" onClick={sizecharthandler}>
              Size Guide
            </h6>
            {size ? (
              <div>
                <Modal
                  size="lg"
                  show={size}
                  onHide={() => {
                    setSize(false)
                  }}
                  centered
                  variant="dark"
                >
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    {/* <h1 className="text-danger d-flex align-items-center justify-content-center">
                      Size Chart Coming Soon
                    </h1> */}
                    <img src={coming} width="100%" height="300px" />

                    {/* <ReactLoading type={'spin'} color="#002d55" /> */}
                  </Modal.Body>
                </Modal>
              </div>
            ) : (
              <div></div>
            )}
            <div className="addcart p-2 border_top ">
              <div>
                <Counter height="40px" fontsize="20px" />
              </div>
              <div>
                <Button
                  transform="Uppercase"
                  fontsize="15px"
                  width="150px"
                  height="40px"
                  backgroundColor="#0569BC"
                  color="#ffffff"
                >
                  add to cart
                </Button>
              </div>
              <div className="heart_box  text-center pointer">
                {!heart ? (
                  <FiHeart style={{ fontSize: '15px' }} onClick={showheart} />
                ) : (
                  <FontAwesomeIcon
                    icon={faHeart}
                    color="red"
                    size="1.5x"
                    onClick={showheart}
                  />
                )}
              </div>
            </div>
            <div className="my-4 pointer" onClick={showhandler}>
              <p className="fw_semibold f-17 mb-2 accordion_details">
                {product_description.product_description.heading2}
                <span>
                  <FontAwesomeIcon
                    icon={show ? faAngleUp : faAngleDown}
                    className="mx-1 pointer"
                  />
                </span>
              </p>
              {show ? (
                <p className="text_secondary fw_semibold f-13">
                  {product_description.product_description.description3}
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className="mb-3 pointer " onClick={shownhandler}>
              <p className="fw_semibold f-17 mb-2 accordion_details">
                {product_description.product_description.heading3}
                <span>
                  <FontAwesomeIcon
                    icon={shown ? faAngleUp : faAngleDown}
                    className="mx-1 pointer"
                  />
                </span>
              </p>
              {shown ? (
                <div>
                  <p className="text_secondary fw_semibold f-13">
                    {product_description.product_description.description4}
                  </p>
                  <p className="text_secondary fw_semibold f-13">
                    {product_description.product_description.description5}
                  </p>
                  <p className="text_secondary fw_semibold f-13">
                    {product_description.product_description.description6}
                  </p>
                  <p className="text_secondary fw_semibold f-13">
                    {product_description.product_description.description7}
                  </p>
                </div>
              ) : (
                <p></p>
              )}
            </div>
            {/* <div className="mb-3">
              <p className="fw_semibold f-17 mb-2">
                {product_description.product_description.heading4}
              </p>
              <p className="text_secondary fw_semibold f-13">
                {product_description.product_description.description8}
              </p>
            </div> */}
            {/* <div className="mb-3">
              <div className="d-flex align-items-center">
                <label className="f-17 fw_semibold">Email :</label>
                <p className="text-lowercase  ms-2 f-13 fw_semibold text_secondary">
                  contact@skechers.com
                </p>
              </div>
              <div>
                <label className="f-17 fw_semibold ">Phone:</label>
                <span className="ms-2 f-13 fw_semibold text_secondary">
                  +1 (23) 456 789
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <Producthighlights
          heading={'Product Highlights'}
          data={data.producthighlights}
        />
      </div>

      <div className="container">
        <Productstory
          heading1={'Product story'}
          desc={product_description.product_description.description9}
          data={data.productstorydetails}
          listheading1={'Features & benefits'}
          listheading2={'details'}
          origin={'Country of origin'}
          country={'VN'}
        />
      </div>

      <div className="container"></div>
      {/* <div className="container ">
        <Slider
          data={data.Technologyslider}
          responsive={responsive}
          width="150px"
          height="150px"
          className="technology_slider"
        />
      </div> */}

      <div className="container my-5">
        <h2 className="text-uppercase my-5 fw_semibold">You may also like</h2>
        <Productslider
          data={product_details}
          responsive={shoeresponsive}
          width="100%"
          height="100%"
        />
      </div>
      <div className="container my-5">
        <h2 className="text-uppercase my-5 fw_semibold">
          Recently Viewed Items
        </h2>
        <Productslider
          data={product_details}
          responsive={shoeresponsive}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}

export default ProductDetails
