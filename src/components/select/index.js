import React from 'react'

const Selectbar = (props) => {
  return (
    <div>
      <select
        style={{
          borderRadius: '20px',
          // paddingTop: '7px',
          // paddingBottom: '7px',
          // paddingLeft: '9px',
          // paddingRight: '27px',
          padding: '10px',
          fontSize: '15px',
          border: '1px solid #c1c1c1',
          color: 'grey',
        }}
      >
        {props.data.map((val) => {
          return <option value={val.value}> {val.option}</option>
        })}
      </select>
    </div>
  )
}

export default Selectbar
