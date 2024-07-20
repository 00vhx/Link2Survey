import React, { useState } from 'react';

const DropDown = ({ options, onSelect, placeholder }) => {
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className="dropdown-container">
      <select className="dropdown-select" value={selected} onChange={handleChange}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
