import React from 'react';
import Button from './Button';

const WindowHeader = ({ title, onClose }) => {
  return (
    <div className="window-header">
      <p>{title}</p>
      <div className="buttons">
        <Button type="close" iconClass="fas fa-times" onClick={onClose} />
      </div>
    </div>
  );
}

export default WindowHeader;
