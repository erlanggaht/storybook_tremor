import React from 'react'
import './input.css'
import classNames from 'classnames';
import PropTypes from 'prop-types'; 

function Input(props) {     
const {type ='text', size='medium', placholder,fullWidth} = props

  return (
    <input 
    type={type} 
    placeholder={placholder} 
    className={classNames('input', [size], {fullWidth})} />
  )
}

Input.propTypes = {
    type : PropTypes.string,
    size : PropTypes.string,
    placeholder : PropTypes.string,
    fullWidth : PropTypes.bool
}
Input.defaultProps = {
    type : PropTypes.string,
    size : PropTypes.string,
    fullWidth : PropTypes.bool
}


export default Input;
