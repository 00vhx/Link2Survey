import React, { useState } from 'react';

const YesNoComponent = ({index}) => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="yesno-container">
      <div className="title-wrapper">
        <div className="number">Q{index}</div>
        <input />
      </div>
      <div className="yesno-options">
        <label>
          <input
            type="radio"
            name="yesno"
            value="yes"
            checked={selectedOption === 'yes'}
            onChange={() => setSelectedOption('yes')}
          />
          예
        </label>
        <label>
          <input
            type="radio"
            name="yesno"
            value="no"
            checked={selectedOption === 'no'}
            onChange={() => setSelectedOption('no')}
          />
          아니오
        </label>
      </div>
    </div>
  );
};

export default YesNoComponent;
