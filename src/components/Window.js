import React from 'react';
import Draggable from 'react-draggable';
import WindowHeader from './WindowHeader';
import WindowBody from './WindowBody';
import '../styles/window.css';

const Window = ({ title, content, onClose }) => {

  return (
    <Draggable handle=".window-header">
      <div className="window strips draggable">
        <WindowHeader title={title} onClose={onClose} />
        <WindowBody  content={content} />
      </div>
    </Draggable>
  );
}

export default Window;
