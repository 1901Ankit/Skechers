import React from 'react'

const Paginations = ({ page, maxpage }) => {
  return (
    <div className="d-flex align-items-center" style={{ gap: '20px',cursor:"pointer" }}>
      <p>{page}</p>
      <p>{maxpage}</p>
      <span onClick={() => page < maxpage}>Next</span>
    </div>
  )
}

export default Paginations
