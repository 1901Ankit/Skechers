import React, { useState } from 'react'
import logo from '../../assests/image/logo/skecherslogo.png'
import './Index.css'
import FooterList from './footerlist'
import footer_description from '../../assests/data/constant'
import data from '../../assests/data/data'
import FooterIcon from './footer_social_icon'

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-light px-5">
        <div className=" container py-5">
          <div className="row">
            <div className="col-sm-3 text-center">
              <ul className="list-unstyled">
                <li className="icons mb-4">
                  <img src={logo} alt="logo" className='logo' />
                </li>
                <li>
                  {data.contact.map((val, id) => {
                    return (
                      <div className="d-flex justify-content-start align-items-center mb-2" key={id}>
                        {val.icon}
                        <span className="text_secondary f-13 fw_semibold">{val.type}</span>
                      </div>
                    )
                  })}
                </li>

                <li className="my-3">
                  <FooterIcon data={data.socialicons} className="me-3 " />
                </li>
              </ul>
            </div>
            <div className="col-sm-5 ">
              <div className="row">
                <div className="col-sm-4">
                  <FooterList data={data.shop} heading={'Shop'} fweight="800" />
                </div>
                <div className="col-sm-4 ">
                  <FooterList
                    heading={'Support'}
                    data={data.support}
                    fweight="800"
                  />
                </div>
                <div className="col-sm-4">
                  <FooterList
                    heading={'Company'}
                    data={data.company}
                    fweight="800"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4 ">
              <ul className="list-unstyled">
                <li className="mb-4">
                  <p className="fw_bold  ">
                    Sign up for email updates + get 20% off
                  </p>
                </li>
                <li>
                  <form>
                    <div className="d-flex subscribe">
                      <input
                        type="text"
                        className="subscribe_input"
                        placeholder="Enter your Email"
                      />
                      <button className="subscribe_btn f-12 fw_semibold">
                        {' '}
                        SUBSCRIBE
                      </button>
                    </div>
                  </form>
                </li>
                <li className="mt-4">
                  <p className=" f-12 text_secondary">
                    {footer_description.footer_description.message_3}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 m-auto">
                <div className="border_dark p-5">
                  <div className="icons">
                    <div>
                      <p className="fw_bold secure">Secure Online Payment</p>
                    </div>
                    <FooterIcon data={data.paymenticon} className="me-3" socialclass="payment_icon" />
                  </div>
                  <div>
                    <p className="f-13 my-2 text_secondary">
                      {footer_description.footer_description.message_1}
                    </p>
                    <p className="f-13 text_secondary">
                      {footer_description.footer_description.message_2}
                    </p>
                  </div>
                </div>
                <p className="f-13 my-3 text_secondary">
                  {footer_description.footer_description.message_4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
