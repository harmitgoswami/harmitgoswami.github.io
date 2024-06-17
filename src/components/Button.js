import React from 'react';

const Button = ({ type, iconClass, onClick }) => {
  return (
    <div className={`button ${type}`} onClick={onClick}>
      <i className={iconClass}></i>
    </div>
  );
}

export default Button;
