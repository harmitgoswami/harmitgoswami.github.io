import React from 'react';

const Button = ({ type, onClick }) => {
  return (
    <div className={`button ${type}`} onClick={onClick}>
      <p>X</p>
    </div>
  );
}

export default Button;
