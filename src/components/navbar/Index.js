import React, { useState, useEffect } from 'react'
import logo from '../../assests/image/logo/skecherslogo.png'
import './Index.css'
import ReactFlagsSelect from 'react-flags-select'
import countries from '../../assests/data/country'
import { Link, useNavigate } from 'react-router-dom'
import Subheader from '../subheader.js/index.js'
import viewimage1 from '../../assests/image/main/menuicon/headerimages/technologymenu.jpg'
import viewimage2 from '../../assests/image/main/menuicon/headerimages/techmenus2.jpg'
import heart from '../../assests/image/main/menuicon/heart.png'
import cart from '../../assests/image/main/menuicon/cart.png'
import data from '../../assests/data/data'
import category1 from '../../assests/image/main/menuicon/headerimages/collectionimage1.jpg'
import category2 from '../../assests/image/main/menuicon/headerimages/collectionimage2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import men1 from '../../assests/image/main/menuicon/headerimages/menmenuimage1.jpg'
import men2 from '../../assests/image/main/menuicon/headerimages/menmenuimage2.jpg'
import women1 from '../../assests/image/main/menuicon/headerimages/womenimage1.jpg'
import women2 from '../../assests/image/main/menuicon/headerimages/womenimage2.jpg'
import kids1 from '../../assests/image/main/menuicon/headerimages/kidemenuimage1.jpg'
import kids2 from '../../assests/image/main/menuicon/headerimages/kidsmenuimage2.jpg'
import {
  faBars,
  faHamburger,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
const Headerbar = () => {
  const [selected, setSelected] = useState('US')
  const onSelect = (countries) => setSelected(countries)

  const customLabels = countries.reduce((accumulator, value) => {
    return { ...accumulator, [value]: { primary: value } }
  }, {})

  const [show, setShow] = useState(false)
  const [categories, setCategories] = useState(false)
  const [men, setMen] = useState(false)
  const [women, setWomen] = useState(false)
  const [kids, setKids] = useState(false)
  const [mobileview, setMobileview] = useState(false)
  const [fixed, setFixed] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setFixed(window.pageYOffset > 0))
    }
  }, [])
  return (
    <div className="">
      <div className="container-fluid my-2">
        <div className="uppernavbar">
          <div className="mx-2">
            <ReactFlagsSelect
              selected={selected}
              onSelect={onSelect}
              showSelectedLabel={true}
              showSecondaryOptionLabel={true}
              customLabels={customLabels}
              countries={countries}
              selectedSize={13}
              fullWidth={false}
              optionsSize={13}
            />
          </div>
          <div className="mx-2 icon_bar ">
            <input className="input_bar" />
            <span className="search">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
          <div className="mx-2 f-13">Need Help ?</div>
          <div className="mx-2 f-13">
            <Link to={'/login'} className="text-decoration-none text_secondary">
              Login/Register
            </Link>
          </div>
          <div className="mx-2">
            <img src={heart} width="20px" alt="heart icon" />
          </div>
          <div className="mx-2">
            <img src={cart} width="20px" alt="cart icon" />
          </div>
        </div>
      </div>

      <div
        className={`${
          fixed
            ? 'container-fluid  border_top navbar_fixed'
            : 'container-fluid  border_top'
        }`}
      >
        <div className="custom_navbar">
          <div className="Nav_brand border_right">
            <Link to={'/'}>
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>

          <div className="nav_links">
            <div
              className="Nav_link border_right"
              onMouseOver={() => {
                setShow(true)
              }}
              onMouseLeave={() => {
                setShow(false)
              }}
              onClick={() => {
                navigate('/technology')
              }}
            >
              Technology
              {show ? (
                <div className={`${fixed ? 'subheader_fixed' : 'subheader'}`}>
                  <Subheader
                    image1={viewimage1}
                    image2={viewimage2}
                    className="pointer"
                    data={data.headerlist}
                    heading={''}
                    height1="100%"
                    height2="100%"
                    heading2={'Comfort Technologies'}
                    mb1={'21px'}
                    mb3="21px"
                    data3={data.headerlist}
                    data2={data.headerlist}
                  />
                </div>
              ) : (
                <div className="d-none"></div>
              )}
            </div>
            <div
              className="Nav_link border_right"
              onMouseOver={() => {
                setCategories(true)
              }}
              onMouseLeave={() => {
                setCategories(false)
              }}
              onClick={() => {
                navigate('/collection')
              }}
            >
              Collection
              {categories ? (
                <div className={`${fixed ? 'subheader_fixed' : 'subheader'}`}>
                  <Subheader
                    data={data.categoriesshoelist}
                    heading2={'Collection'}
                    heading={''}
                    mb1="21px"
                    mb3="21px"
                    // heading3={'Accessories'}
                    image1={category1}
                    image2={category2}
                    data2={data.categoriesshoelist}
                    data3={data.categoriesshoelist}
                    height1="100%"
                    height2="100%"
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div
              className="Nav_link border_right"
              onMouseOver={() => {
                setMen(true)
              }}
              onMouseLeave={() => {
                setMen(false)
              }}
            >
              Men
              {men ? (
                <div className={`${fixed ? 'subheader_fixed' : 'subheader'}`}>
                  <Subheader
                    data2={data.categorieslist}
                    heading2={'Apparel'}
                    heading={'Shoes'}
                    heading3={'Accessories'}
                    image1={men1}
                    image2={men2}
                    data={data.shoelist}
                    data3={data.shoelist}
                    height1="100%"
                    height2="100%"
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div
              className="Nav_link border_right"
              onMouseOver={() => {
                setWomen(true)
              }}
              onMouseLeave={() => {
                setWomen(false)
              }}
            >
              Women
              {women ? (
                <div className={`${fixed ? 'subheader_fixed' : 'subheader'}`}>
                  <Subheader
                    data2={data.categorieslist}
                    heading2={'Apparel'}
                    heading={'Shoes'}
                    heading3={'Accessories'}
                    image1={women1}
                    image2={women2}
                    data={data.shoelist}
                    data3={data.shoelist}
                    height1="100%"
                    height2="100%"
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div
              className="Nav_link "
              onMouseOver={() => {
                setKids(true)
              }}
              onMouseLeave={() => {
                setKids(false)
              }}
            >
              Kids
              {kids ? (
                <div className={`${fixed ? 'subheader_fixed' : 'subheader'}`}>
                  <Subheader
                    data2={data.categorieslist}
                    heading2={'Apparel'}
                    heading={'Shoes'}
                    heading3={'Accessories'}
                    image1={kids1}
                    image2={kids2}
                    data={data.shoelist}
                    data3={data.shoelist}
                    height1="100%"
                    height2="100%"
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <div className="hamburger">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headerbar
