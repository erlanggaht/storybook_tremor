import classNames from "classnames"
import PropTypes from 'prop-types'
import './center.css'

function Center(props) {
    const {children,position} = props
  return (
    <div className={`center ${position}`}>{children}</div>
  )
}


Center.propTypes = {
  children : PropTypes.node,
  position : PropTypes.string
}

export  default Center;
