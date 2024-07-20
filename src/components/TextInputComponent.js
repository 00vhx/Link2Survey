import React, { useState } from 'react';

const TextInputComponent = ({index}) => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="text-input-container">
       <div className="title-wrapper">
        <div className="number">Q{index}</div>
        <input />
      </div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="여기에 텍스트를 입력하세요"
        className="text-input"
      />
    </div>
  );
};

export default TextInputComponent;
