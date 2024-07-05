import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'

const Productstory = (props) => {
  let [show, setShow] = useState(false)
  const showhandler = () => {
    setShow(!show)
  }
  return (
    <div style={{ backgroundColor: 'rgb(204 204 204 / 34%)' }} className=" p-5">
      <div className="row">
        <div className="col-sm-12">
          <h6 style={{ textTransform: 'uppercase' }}>{props.heading1}</h6>
          <div>
            <p className="  text_secondary">{props.desc} </p>
            <p
              className=" fw_semibold text_secondary pointer"
              onClick={() => {
                showhandler()
              }}
            >
              {show ? ' ' : 'Read More...'}
            </p>
          </div>
        </div>
      </div>
      {show ? (
        <div className="row my-5">
          <div className="col-sm-6 p-0">
            <h6 className="text-uppercase ms-3">{props.listheading1}</h6>
            <ul className="text_secondary ">
              {props.data.map((val) => {
                return <li>{val.list}</li>
              })}
            </ul>
          </div>
          <div className="col-sm-6 " style={{ textAlign: 'justify' }}>
            <h5 className="text-uppercase ms-3">{props.listheading2}</h5>
            <ul className="text_secondary">
              {props.data.map((val) => {
                return <li>{val.list}</li>
              })}
            </ul>
          </div>
          <p onClick={showhandler} className="pointer text_secondary fw_semibold" >Read Less</p>
        </div>
      ) : (
        <div></div>
      )}

      {/* <div className="row my-5">
        <div className="col-sm-12 p-0 " style={{ textAlign: 'justify' }}>
          <h6 className="text-uppercase ms-3 pointer">{props.origin}</h6>
          <p className="text-uppercase ms-3 pointer">{props.country}</p>
        </div>
      </div> */}
    </div>
  )
}

export default Productstory
