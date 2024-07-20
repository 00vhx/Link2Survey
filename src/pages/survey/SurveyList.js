import React from 'react';
import SurveyItem from '../../components/SurveyItem';
import SurveyItemLong from '../../components/SurveyItemLong';
const SurveyList = () => {
 const surveyItems = [1, 2, 3];
 const surveyTopItems = [1];

  return (
    
    <div className="survey-list-page">
        <div className="top-wrapper">
        <p>추천설문</p>
        <div className="recommand-wrapper">
            <div className="item-wrapper">
            {surveyTopItems.map((item, index) => (
        <SurveyItem key={index} />
      ))}</div>
      </div></div>
        <div className="bottom-wrapper">
            <div className="item-list-wrapper">
        {surveyItems.map((item, index) => (
        <SurveyItemLong key={index} />
      ))}
      </div>
        </div>
    </div>
  );
};

export default SurveyList;
