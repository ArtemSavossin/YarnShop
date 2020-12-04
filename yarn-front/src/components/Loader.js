import React from "react"
import { spinner, Spinner } from "react-bootstrap"
const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className='sr-only'>Загрузка...</span>
    </Spinner>
  )
}

export default Loader
