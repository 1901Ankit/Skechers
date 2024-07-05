import React from 'react'
import './index.css'
const FooterIcon = (props) => {
  return (
    <div>
      <div className="social_icons">
        {props.data.map((val, id) => {
          return (
            <div className="me-3 footer_icon" key={id}>
              <img src={val.icon} alt={'icon'} className={props.socialclass} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FooterIcon
