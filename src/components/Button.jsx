import React from 'react'
// import PropTypes from 'prop-types'

const Button = ({text, onClick, color }) => {

  return (
    <div>
        <button className="btn btn-success" onClick={onClick}>{text}</button>
    </div>
  )
}



export default Button;