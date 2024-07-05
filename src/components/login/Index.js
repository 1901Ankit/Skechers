import React from 'react'
import Button from '../button'
import './Index.css'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Banner from '../banner'
import data from '../../assests/data/data'
const Login = () => {
  return (
    <div className="mb-5">
      {/* <Banner data={data.loginbanner} height="40vh"  /> */}
      <div className="bg_login">
        <div className="container py-5 ">
          <div className="row">
            <div className="col-sm-6 m-auto">
              <form className="login_form py-4 my-5">
                <div className="text-center text_primary">
                  <h5 className="fw_semibold">Registered Customers</h5>
                </div>
                <div className="row">
                  <div className="col-sm-9 m-auto">
                    <div>
                      <h6 className="text_secondary f-13">
                        If you have an account,Sign in with your email address
                      </h6>
                    </div>
                    <div className="mt-2">
                      <label>
                        Email<span className="text-danger">*</span>
                      </label>
                      <br />
                      <input type="email" className="login_input" />
                    </div>
                    <div className="mt-2">
                      <label>
                        Password<span className="text-danger">*</span>
                      </label>
                      <br />
                      <input type="password" className="login_input" />
                    </div>
                    <div className="mt-2  d-flex ">
                      <div>
                        <input type="checkbox" className="me-3" />
                      </div>
                      <div>
                        <p className="f-13 fw_semibold text_secondary">
                          By using this form you agree with the storage and
                          handling of your data by this website.
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="f-13 fw_semibold pointer">
                        Forgot Your Password?
                      </span>
                    </div>
                    <div className="mt-2 mb-3">
                      <Button
                        width="100%"
                        backgroundColor="#000000"
                        color="#ffffff"
                        transform="Uppercase"
                        padding="2%"
                        classname="signin_btn"
                        border="1px solid #000"
                      >
                        Sign in
                      </Button>
                    </div>
                    <div className="mt-2">
                      <Button
                        width="100%"
                        backgroundColor="#002d57"
                        color="#ffffff"
                        transform="Uppercase"
                        padding="2%"
                        classname="create_btn"
                        border="1px solid #163055"
                      >
                        create new account
                      </Button>
                    </div>
                    <div className="mt-4 mb-4 text-danger f-13 fw_semibold">
                      <span>Required Fields*</span>
                    </div>

                    <div className="mt-2 d-flex align-items-center justify-content-between">
                      <div className="d-flex">
                        <div className="icon_border">
                          <FaFacebookF />
                        </div>

                        <Button
                          width="200px"
                          height="100%"
                          backgroundColor="#000000"
                          color="#ffffff"
                          transform="Uppercase"
                          padding="8px"
                          fontsize="13px"
                          bordertoprightradius="4px"
                          borderbottomrightradius="4px"
                        >
                          log in with facebook
                        </Button>
                      </div>
                      <div className="d-flex">
                        <div className="icon_border">
                          <FcGoogle />
                        </div>

                        <Button
                          width="200px"
                          height="100%"
                          backgroundColor="#000000"
                          color="#ffffff"
                          transform="Uppercase"
                          padding="8px"
                          fontsize="13px"
                          bordertoprightradius="4px"
                          borderbottomrightradius="4px"
                        >
                          log in with Google
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
