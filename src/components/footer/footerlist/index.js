import React from 'react'
import '../Index.css'

const FooterList = (props) => {
  return (
    <div>
      <ul className="list-unstyled text-start pointer">
        <li className={props.className || ''}>
          <h6
            style={{
              fontWeight: props.fweight,
              fontSize: props.fontsize || '',
              marginBottom: props.marginbottom || '',
            }}
          >
            {props.heading}
          </h6>
        </li>
        {props.data.map((val, i) => {
          return (
            <li
              className={`f-13 fw_semibold text_secondary mb-1  +${props.className}`}
              style={{ fontSize: props.fs || '', fontWeight: props.fw || '' }}
            >
              {val.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterList
