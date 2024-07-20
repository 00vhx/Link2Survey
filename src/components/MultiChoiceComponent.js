import React, { useState } from 'react';

const MultiChoiceComponent = ({index}) => {

  return (
    <div className="multi-choice-container">
       <div className="title-wrapper">
        <div className="number">Q{index}</div>
        <input />
      </div>
      {/* <button onClick={handleButtonClick} className="add-picture-button">
        <div className="plus-icon">+</div>
      </button>
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      /> */}
    </div>
  );
};

export default MultiChoiceComponent;
