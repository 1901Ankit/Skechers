import React from 'react'
import data from '../../assests/data/data'
import Customaccordion from '../../components/accordion'
import Banner from '../../components/banner'
import Button from '../../components/button'
import FooterList from '../../components/footer/footerlist'
import Selectbar from '../../components/select'
import { FaLongArrowAltUp } from 'react-icons/fa'
import './index.css'
import Product from '../../components/products/product'
import Paginations from '../../components/pagination'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Breadcrumps from '../../components/breadcrumps'
import product_details from '../../assests/data/product_details'
const Productlist = () => {
  const location = useLocation()
  const pathname = location.pathname.split('/')
  let accordion = [
    {
      heading: 'Gender',
      data: data.gender,
    },
    {
      heading: 'Sports',
      data: data.sportfilter,
    },
    {
      heading: 'Color',
      data: data.gender,
    },
    {
      heading: 'Size',
      data: data.gender,
    },
    {
      heading: 'Price',
      data: data.gender,
    },
    {
      heading: 'Collection',
      data: data.gender,
    },
    {
      heading: 'Age Group',
      data: data.gender,
    },
    {
      heading: 'Shoe Type',
      data: data.gender,
    },
    {
      heading: 'Fit',
      data: data.gender,
    },
  ]

  let [page, setPage] = useState(1)
  let [maxpage, setMaxpage] = useState(2)

  return (
    <div>
      {/* <Banner data={data.productbanner} height="90vh" /> */}

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-3 ">
            <Breadcrumps path={pathname} />
            <h3 className="f-20">Athletics Shoes for Men</h3>
            <FooterList data={data.filter} heading={'Shoes'} />

            <div className="d-flex justify-content-between mt-5 border_bottom pb-2">
              <span>Filter</span>
              <span className="text-decoration-underline">Clear All</span>
            </div>
            {accordion.map((val, id) => {
              return (
                <div>
                  <Customaccordion heading={val.heading} data={val.data} />
                </div>
              )
            })}
          </div>

          <div className="col-sm-8">
            <div className="filter_box mb-4">
              <div className="d-flex align-items-center">
                <Selectbar data={data.sortoption} />
                <Button
                 
                  border="1px solid #c1c1c1"
                  padding="8px"
                  classname="mx-2 arrowup"
                  backgroundColor="#ffffff"
                >
                  <FaLongArrowAltUp />
                </Button>
              </div>
              <div>
                <Selectbar data={data.pagination} />
              </div>
            </div>

            <div className="row">
              {product_details.map((val, id) => {
                return (
                  <div className="col-sm-4 mb-5 mt-4 ">
                    <Product
                      data={val}
                      Link={`/home/productlist/${val.brand}`}
                      ml="2%"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-3 ">
          <Paginations page={page} maxpage={maxpage} setPage={setPage} />
        </div>
      </div>
    </div>
  )
}

export default Productlist
