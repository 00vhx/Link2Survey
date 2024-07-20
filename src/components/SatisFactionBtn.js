import React, { useState } from 'react';

const SatisfactionBtn = () => {
  const [satisfaction, setSatisfaction] = useState('');

  const handleChange = (event) => {
    setSatisfaction(event.target.value);
  };

  const options = [
    { value: 'very-unsatisfied', label: '매우 불만족' },
    { value: 'unsatisfied', label: '불만족' },
    { value: 'neutral', label: '보통' },
    { value: 'satisfied', label: '만족' },
    { value: 'very-satisfied', label: '매우 만족' }
  ];

  return (
    <div className="satisfaction-container">
      {options.map(option => (
        <label key={option.value} className="satisfaction-label">
          <input
            type="radio"
            value={option.value}
            checked={satisfaction === option.value}
            onChange={handleChange}
            className="satisfaction-radio"
          />
          <span className="custom-radio"></span>
          <span className="satisfaction-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default SatisfactionBtn;
