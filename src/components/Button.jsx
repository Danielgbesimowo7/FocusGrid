import React from 'react'

const Button = ({text, type}) => {
  return (
    <button className={`${type=="primary"? "btn-primary":"btn-secondary"}`}>{text}</button>
  )
}

export default Button
