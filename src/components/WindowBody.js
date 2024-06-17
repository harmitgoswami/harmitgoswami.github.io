import React from 'react';

const WindowBody = ({ content }) => {
  return (
    <div className="window-body-wrapper">
      <div className="window-body">
        <p className='window-text'>{content}</p>
      </div>
    </div>
  );
}

export default WindowBody;
