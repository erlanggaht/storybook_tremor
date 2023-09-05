import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


function Button (props) {
  const {variant ='primary',children,...rest} = props
  return (
  
    <button
      type="button"
      className={`button ${variant}`}
      style={{backgroundColor:rest.backgroundColor}}
      {...rest}
      onClick={() => alert(variant)}
      onMouseOver={() => console.log('onmouseover masuk')}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  variant: PropTypes.string,
};


export default Button;
