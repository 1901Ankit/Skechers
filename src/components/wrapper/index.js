import React from 'react'
import { useNavigate } from 'react-router-dom'

const Wrapper = (props) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        navigate(props.link, { state: props.data })
      }}
      className={props.className || ''}
    >
      {props.children}
    </div>
  )
}

export default Wrapper
