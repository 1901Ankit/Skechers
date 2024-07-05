import React from 'react'
import { FaPeopleArrows } from 'react-icons/fa'
import './index.css'
const Button = (props) => {
  return (
    <div>
      <button
        className={`buttonui + ${props.classname}`}
        type={props.type || ''}
        id={props.id || ''}
        onClick={props.onClick || ''}
        style={{
          width: props.width || '',
          height: props.height || ' ',
          padding: props.padding || '',
          backgroundColor: props.backgroundColor || '',
          color: props.color || '',
          textTransform: props.transform || '',
          border: props.border || '',
          borderRadius: props.borderradius || ' ',
          fontSize: props.fontsize || '',
          marginRight: props.marginright || '',
          marginLeft: props.marginleft || '',
          marginBottom: props.marginbottom || '',
          position: props.position || '',
          top: props.top || '',
          bottom: props.bottom || '',
          right: props.right || '',
          left: props.left || '',
          borderTopRightRadius: props.bordertoprightradius || '',
          borderBottomRightRadius: props.borderbottomrightradius || '',
        }}
      >
        {props.children}
      </button>
    </div>
  )
}

export default Button
