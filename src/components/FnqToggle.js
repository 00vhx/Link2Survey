import React, { useState } from 'react';

const FnqToggle = ({ title, content }) => {
  const [showText, setShowText] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
    setIsRotated(!isRotated);
  };

  return (
    <div>
      <div class="faq-title">{title}</div>
      <img
        src='/icon/toggle.svg'
        onClick={toggleText}
        
        alt='Toggle Icon'
      />
      {showText && (
        <div>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default FnqToggle;
