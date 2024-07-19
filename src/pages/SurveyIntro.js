const SurveyIntro =() => {
    return(
        <div className="survey_intro">
            <div className="intro-title">다양한 설문조사</div>
            <p>다양한 프로젝트를 위한 주제와 <br/>다양한 참여자가 공존합니다</p>
            <div className="intro-box-wrapper">
                <div className="intro">
                    <div className="intro-wrapper">
                        <div className="title">나의 저축 스타일은?</div>
                        <p>투자냐 저축이냐 그것이 문제로다</p>
                        <img src="/icon/pig.svg"/>
                    </div>
                </div>
                <div className="intro">
                    <div className="intro-wrapper">
                        <div className="title">혹시 나도... 불면증?</div>
                        <p>잠 못드는 나날들</p>
                        <img src="/icon/sleep.svg"/>
                    </div>
                </div>
                <div className="intro">
                    <div className="intro-wrapper">
                        <div className="title">즉흥여행자들을<br/>위한 설문조사</div>
                        <p>너 혹시 P야?</p>
                        <img src="/icon/trip.svg"/>
                    </div>
                </div>
             </div>
             <div className="survey-btn">설문 목록 바로가기</div>
        </div>
    )
}

export default SurveyIntro;
