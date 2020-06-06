import React from 'react';
import PropTypes from 'prop-types';
import './index.less';
 
const Button = ({ text, className, size, type, }) => {
  if (type === undefined){
    type = 'default';
  }

  if (size === undefined){
    size = 'normal'
  }

  console.log(className)
  return (
    <button className={ className === undefined ? `${type} ${size}`:`${className} ${type} ${size}`}>这是一个组件按钮{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small','normal','large']),
  type: PropTypes.oneOf(['default','success','error','warning','primary','disabled','dashed'])
};

export default Button;