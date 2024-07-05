import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Breadcrumps = (props) => {
//   console.log('p', props)
  const split = props.path
  const navigate = useNavigate()
  return (
    <div className="d-flex mb-2">
      {split.map((val, id) => {
        return (
          <div>
            <span
              onClick={() => {
                if (val === 'home') {
                  navigate('/')
                } else {
                  navigate(-1)
                }
              }}
              className="pointer text_secondary f-13 fw_semibold text-capitalize"
            >
              {val}
            </span>
            <span>{id > 0 ? (split.length - 1 == id ? '' : ' / ') : ''}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumps
