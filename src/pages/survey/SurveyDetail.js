import React from 'react';

const SurveyDetail = () => {
  

  return (
    <div className="survey-detail-page">
        <div className="subject">경영대학 학생</div>
        <div className="title">경제 경영 전공 대학생 <br/>주식 투자에 대한 관심도 조사</div>
        <div className="sub-text">안녕하세요, 상경 계열 대학생 여러분!<br/>
본 설문조사는 상경 계열 대학생들의 주식 투자에 대한 관심도를 파악하고,
이를 바탕으로 금융 교육 프로그램과 관련 지원을 개선하기 위해 진행됩니다. 주식 투자는 현대 경제와 금융의 중요한 요소로,
여러분의 관심도와 의견을 통해 보다 실질적인 교육을 제공하고자 합니다.</div>
        <div className="survey-box">
            <div className="survey-item">
            <div className="title">응답기간</div>
            <p>2024.07 ~ 2024.08</p></div>
            <div className="survey-item">
            <div className="title">소요시간</div>
            <p>5분</p></div>
            <div className="survey-item">
            <div className="title">응답수</div>
            <p>100개</p></div>
            <div className="survey-item">
            <div className="title">참여혜택</div>
            <p>무작위 추첨을 통해 설문 참여자 3명에게<br/>
            스타벅스 기프티콘 증정</p></div>
        </div>
        <div className="survey-make-btn">설문 참여하러 가기</div>
    </div>
  );
};

export default SurveyDetail;
