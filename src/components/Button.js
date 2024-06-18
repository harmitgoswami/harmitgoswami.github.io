import React from 'react';

const Button = ({ type, onClick }) => {
  return (
    <div className={`button ${type}`} onClick={onClick}>
      
    </div>
  );
}

export default Button;
