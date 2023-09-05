import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types';
import './navigation.css'


 function Navigation(props) {
    const {title,shadow,between} = props
  return (
    <nav className={classNames('navigation',{'shadow' : shadow,'between' : between})}>
        <h1>{title}</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Login</li>
            <li>Signup</li>
        </ul>
    </nav>
  )
}

Navigation.propTypes = {
    title : PropTypes.string,
    shadow : PropTypes.string,
    between : PropTypes.string
}


export default Navigation;

