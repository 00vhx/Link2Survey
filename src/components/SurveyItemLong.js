import React from 'react';

const SurveyItemLong = () => {
  return (
    <div className="survey-item">
        <div className="title-wrapper">
      <div className="subject">경영대학 학생</div>
      <div className="content">
        <div className="title">국민대생의 반도체 산업 설문조사</div>
        <div className="survey-date">설문기간: 2024.7.11 - 2024.7.20</div>
        </div>
      </div>
      {/* <div className="info">
        <div className="info-item">
          <span className="info-label subject">창업공대 <br/>전공생</span>
          <span>대상</span>
        </div>
        <div className="info-item">
          <span className="info-label">14개</span>
          <span>응답수</span>
        </div>
        <div className="info-item">
          <span className="info-label">5분</span>
          <span>예상소요시간</span>
        </div>
      </div> */}
      <div className="date">
        D-5
      </div>
    </div>
  );
}


export default SurveyItemLong;
