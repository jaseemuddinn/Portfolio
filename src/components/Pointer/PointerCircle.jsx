import React, { useState, useEffect } from 'react';
import './PointerCircle.css'

const PointerCircle = () => {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePointerPosition = (e) => {
      setPointerPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePointerPosition);

    return () => {
      document.removeEventListener('mousemove', updatePointerPosition);
    };
  }, []);

  return (
    <div className="pointer-circle" style={{ left: pointerPosition.x, top: pointerPosition.y }}></div>
  );
};

export default PointerCircle;
