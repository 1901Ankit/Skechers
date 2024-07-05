import React, { useState } from 'react'
import './index.css'
import { TfiAngleDown, TfiAngleUp } from 'react-icons/tfi'
import FooterList from '../footer/footerlist'
const Customaccordion = (props) => {
  let [show, setShow] = useState(false)
  return (
    <div>
      <div
        className={`accordion_head ${!show ? 'border_bottom' : ''}`}
        onClick={() => {
          setShow(!show)
        }}
      >
        <p className="fw_semibold f-13">{props.heading}</p>
        {show ? <TfiAngleUp /> : <TfiAngleDown />}
      </div>
      {show ? (
        <div className="accordion_body">
          <FooterList data={props.data} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Customaccordion
