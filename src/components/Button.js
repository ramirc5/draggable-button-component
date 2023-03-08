// Button.js
import React, { useState, useEffect } from 'react';

function Button() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    function handleMouseMove(e) {
      if (dragging) {
        setPosition({
          x: e.pageX - offsetX + window.scrollX,
          y: e.pageY - offsetY + window.scrollY,
        });
      }
    }

    function handleMouseUp() {
      setDragging(false);
    }

    const button = document.getElementById('draggable-button');
    let offsetX, offsetY;

    function handleMouseDown(e) {
      offsetX = e.pageX - position.x + window.scrollX;
      offsetY = e.pageY - position.y + window.scrollY;
      setDragging(true);
    }

    button.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      button.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, position]);

  return (
    <button
      id="draggable-button"
      style={{ position: 'absolute', left: position.x, top: position.y }}
    >
      Click me and drag me!
    </button>
  );
}

export default Button;
