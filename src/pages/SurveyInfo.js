const SurveyInfo =() => {
    return(
        <div className="survey_info">
            <div className="info-title">왜 <p>Link2Survey</p>인가요?</div>
            <div className="intro-wrapper">
                <div className="intro">
                    <p className="intro-text">설문에 참여만 해도 <br/>사용이 가능한 <strong> 포인트 적립</strong></p>
                    <img src="/icon/money.svg"/>
                </div>
                <div className="intro">
                <img src="/icon/lock.svg"/>
                <p className="intro-text">타인에게<br/>저장되지 않는 개인 정보로<strong> 안전한 기프티콘 수신</strong></p>
                    
                </div>
                <div className="intro">
                <p className="intro-text">다양한 설문조사와<br/> <strong> 자동 분석되는 설문 결과 </strong></p>
                    <img src="/icon/survey.svg"/>
                </div>
            </div>
            <div className="survey-btn">설문 조사 제작하기</div>
        </div>
    )
}

export default SurveyInfo;
