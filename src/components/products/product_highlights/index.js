import React from 'react'
import './index.css'
const Producthighlights = (props) => {
  return (
    <div>
      <div className="border mb-4 p-3 pointer ">
        <div
          style={{
            backgroundColor: '#ffffff',
            position: 'relative',
            bottom: '35px',
            width: 'fit-content',
            padding: '8px',
          }}
        >
          <h5 className="fw_bold">{props.heading}</h5>
        </div>
        <div className="row">
          {props.data.map((val) => {
            return (
              <div className="col-sm-3 text-center  ">
                <div className=''>
                  <img src={val.img} className="ms-5 " width={100} alt="product highlight" />
                  <p className="text-uppercase f-13 mt-1 text-center fw_semibold  ">
                    {val.name}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Producthighlights
