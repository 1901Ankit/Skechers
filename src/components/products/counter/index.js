import React from 'react'
import { useState } from 'react'
import './index.css'
import { AiOutlineMinus } from 'react-icons/ai'
import { GrFormAdd } from 'react-icons/gr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
const Counter = (props) => {
  let [counter, setCounter] = useState(1)

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <div
        className="box "
        style={{
          height: props.height,
          fontSize: props.fontsize,
          width: props.width,
        }}
      >
        <span
       
          className="pointer mb-1"
        >
          <button className="counter_btn" disabled={counter <= 1 ? true : false}    onClick={(counter) => {
            decrement(counter)
          }}>
            <FontAwesomeIcon
              icon={faMinus}
              style={{ fontSize: '12px' }}
              color="gray"
            />
          </button>
        </span>
        <input value={counter} className="input_counter text-center" />
        <span
          onClick={(counter) => {
            increment(counter)
          }}
          className="pointer mb-1"
        >
          <FontAwesomeIcon
            icon={faPlus}
            style={{ fontSize: '12px' }}
            color="gray"
          />
        </span>
      </div>
    </div>
  )
}

export default Counter
