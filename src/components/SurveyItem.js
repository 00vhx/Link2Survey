import React from 'react';

const SurveyItem = () => {
  return (
    <div className="recommend-survey-item">
      <div className="header">
      수도권 거주자
      </div>
      <div className="title">기후동행카드 사용자 만족도 조사</div>
      <p>안녕하세요! 기후동행카드 사용에 대한 여러분의 의견을 듣고 싶습니다.
      이번 조사에서는 기존 교통비 혜택 카드에서 얼마나 많은 사용자가 기후동행카드로 이동했는지 파악하려 합니다.</p>
      <div className="info-list">
        <div>
        <div className="info-item">
          <span className="info-label">응답 기간</span>
          <span>2024.07 ~ 2024.08</span>
        </div>
        <div className="info-item">
          <span className="info-label">소요 시간</span>
          <span>1분</span>
        </div>
        </div>
        <div>
        <div className="info-item">
          <span className="info-label">소요 시간</span>
          <span>25개</span>
        </div>
        <div className="info-item">
          <span className="info-label">참여 혜택</span>
          <span>50P / 기프티콘 증정</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyItem;
