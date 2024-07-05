import React from 'react'
import { SiVulkan } from 'react-icons/si'
import './index.css'
const Size = (props) => {
  return (
    <div className={props.className}>
      <div className="container">
        <div className="row">
          {props.data.map((val) => {
            return (
              <div className="col-sm-2   text-center  ">
                <div className="size_box ">
                  <p className='f-11'>{val.number}</p>
                </div>
              </div>
            )
          })}
        </div>
        {/* <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="d-flex justify-content-between">
                {props.data.map((val, id) => {
                  return (
                    <div className="size_box">
                      <p style={{ marginTop: '-5px' }}>{val.number}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Size
