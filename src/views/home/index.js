import React from 'react'
import data from '../../assests/data/data'
import Slider from '../../components/slide'
import View from '../../components/view_Product'
import collectionbanner from '../../assests/image/main/wetransfer_216491-bbk_2023-01-05_0928/newbanners/technology/technologyhomebanner.jpg'
import technologybanner from '../../assests/image/main/wetransfer_216491-bbk_2023-01-05_0928/newbanners/collections/collectionbanner.jpg'
import mens from '../../assests/image/main/wetransfer_216491-bbk_2023-01-05_0928/newbanners/shopman.jpg'
import Womens from '../../assests/image/main/wetransfer_216491-bbk_2023-01-05_0928/newbanners/shopwoman.jpg'
import kids from '../../assests/image/main/wetransfer_216491-bbk_2023-01-05_0928/newbanners/shopkids.jpg'
import './index.css'
import Carousels from '../../components/carousel'
import { useNavigate } from 'react-router-dom'

const Home = () => {
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
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const navigate = useNavigate()
  return (
    <div>
      <div style={{ marginBottom: '1px' }}>
        <Carousels
          thumbs={false}
          status={false}
          arrows={true}
          data={data.Homeslider}
          indicators={false}
          display={'grid'}
          placeitems={'center'}
          alignitems={'end'}
          bgcolor="#002d55"
          padding="1%"
          color="#ffffff"
          transform="Uppercase"
          width="200px"
          className=" fw_semibold custom_btn home_btn"
          marginbottom="69px"
          bgheight="90vh"
          autoplay={true}
          border="1px solid #002d55"
          class="carousel_img"
          pauseonhover={true}
          mb="10px"
        />
      </div>
      {/* <Carousels
        thumbs={false}
        status={false}
        arrows={false}
        autoplay={false}
        data={data.hometechnology}
        textalign="start"
        display="grid"
        bgcolor="#ffffff"
        color="#000000"
        alignitems="end"
        className="mb-5 fw_semibold custom_btn "
        marginleft="2%"
        padding="1%"
        transform="Uppercase"
        width="200px"
        marginbottom="2%"
        onclick={() => {
          navigate('/technology')
        }}
        bgheight="100vh"
      /> */}
      {/* <div>
        <Player
          playsInline
          poster="https://digixito.s3.ap-south-1.amazonaws.com/Thumbnail+Skechers+02.jpg"
          src="https://digixito.s3.ap-south-1.amazonaws.com/Skechers+WORK+commercial.mp4"
        />

        <Button
          onClick={() => {
            navigate('technology')
          }}
          backgroundColor="#ffffff"
          padding="1%"
          width="200px"
          position="relative"
          bottom="8pc"
          left="9pc"
          transform="uppercase"
          classname="fw_semibold custom_btn"
          color="#000000"
        >
          Technology
        </Button>
      </div> */}
      <View
        button="view Technology"
        img={technologybanner}
        padding={'1%'}
        bgheight="90vh"
        btnfs="15px"
        marginLeft={'4%'}
        className="mt-4 fw_semibold custom_btn home_btn"
        width="200px"
        onclick={() => {
          navigate('/technology')
        }}
        border="1px solid #002d55"
        class="carousel_img"
        mb="10px"
      />

    
      {/* <div className="container mb-5 mt-5">
        <Slider
          responsive={responsive}
          data={data.Technologyslider}
          width="150px"
          height="150px"
          className="technology_slider"
        />
      </div> */}
      <View
        button="view collections"
        img={collectionbanner}
        padding={'1%'}
        bgheight="90vh"
        marginLeft={'4%'}
        className="mt-4 fw_semibold custom_btn home_btn"
        width="200px"
        onclick={() => {
          navigate('/collection')
        }}
        border="1px solid #002d55"
        class="carousel_img"
        mb="10px"
      />

      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-4 p-0 ">
            <View
              button="Men"
              img={mens}
              padding={'3%'}
              imgwidth="100%"
              className="custom_btn fw_semibold"
              width="150px"
              Marginleft="12%"
              onclick={() => {
                navigate('/home/productlist')
              }}
              bgheight="100vh"
              marginbottom="50px"
              border="1px solid #002d55"
              class="carousel_img"
              borderright="10px solid #fff"
              mb="10px"
            />
          </div>
          <div className="col-sm-4 p-0">
            <View
              button="Women"
              img={Womens}
              imgwidth="100%"
              className="custom_btn fw_semibold home_btn"
              width="150px"
              padding={'3%'}
              Marginleft="12%"
              onclick={() => {
                navigate('/home/productlist')
              }}
              marginbottom="50px"
              bgheight="100vh"
              border="1px solid #002d55"
              class="carousel_img"
              borderright="10px solid #fff"
              mb="10px"
            />
          </div>
          <div className="col-sm-4 p-0">
            <View
              button="Kids"
              img={kids}
              className="custom_btn fw_semibold home_btn"
              width="150px"
              imgwidth="100%"
              padding={'3%'}
              Marginleft="12%"
              onclick={() => {
                navigate('/home/productlist')
              }}
              marginbottom="50px"
              bgheight="100vh"
              border="1px solid #002d55"
              class="carousel_img"
              mb="10px"
            />
          </div>
        </div>
      </div>
      {/* <div
        className="container-fluid py-5"
        style={{ backgroundImage: `url(${newsfeed})` }}
      >
        <div className="row align-items-center ">
          <div className="col-sm-6 m-auto text-center ">
            <form>
              <h4 className="text-white text-uppercase">Newsletter!</h4>
              <Button
                backgroundColor="#ffffff"
                color="#163055"
                width="400px"
                classname="mb-5"
              >
                <div className="d-flex justify-content-around">
                  <div>
                    <RxDotFilled />
                  </div>
                  <div>
                    <p style={{ color: '#163055' }} className="fw_semibold">
                      Newsletter and get 20% discount off
                    </p>
                  </div>
                  <div>
                    <RxDotFilled />
                  </div>
                </div>
              </Button>
              <div className="input_subscribe ">
                <input
                  type="email"
                  placeholder="your email address..."
                  className="input_newsletter"
                  required
                />
                <Button
                  backgroundColor="transparent"
                  color="#ffffff"
                  transform="capitalize"
                  classname="newsfeed_btn"
                  border="1px solid #163055"
                  padding="4px"
                  marginbottom="2px"
                  borderradius="5px"
                  textalign="center"
                >
                  subscribe
                  <BsArrowRightCircle className="ms-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Home
