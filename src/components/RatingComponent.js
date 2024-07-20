import React, { useState } from 'react';

const RatingComponent = ({ index }) => {
  const [rating, setRating] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="rating-container">
      <div className="title-wrapper">
        <div className="number">Q{index}</div>
        <input />
      </div>
      <div className="rating-buttons">
        {[...Array(expanded ? 10 : 5)].map((_, idx) => (
          <button
            key={idx + 1}
            className={`rating-button ${rating === idx + 1 ? 'selected' : ''}`}
            onClick={() => handleRatingChange(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
      <div className="toggle-button" onClick={toggleExpanded}>
        {expanded ? '1~5로 변환하기' : '1~10으로 변환하기'}
      </div>
    </div>
  );
};

export default RatingComponent;
