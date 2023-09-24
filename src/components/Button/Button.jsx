import React from 'react'
import './button.css';

const Button = (props) => {

  const { varient = 'primary' , children, ...rest } = props;
  
  return (
    <button className={`button ${varient}`} {...rest}>
      { children }
    </button>
  )
}

export default Button