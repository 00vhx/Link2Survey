const SurveyIntro =() => {
    return(
        <div class="survey_intro">
            <div class="intro-title">다양한 설문조사</div>
            <p>다양한 프로젝트를 위한 주제와 <br/>다양한 참여자가 공존합니다</p>
            <div class="intro-box-wrapper">
                <div class="intro">
                    <div class="intro-wrapper">
                        <div class="title">나의 저축 스타일은?</div>
                        <p>투자냐 저축이냐 그것이 문제로다</p>
                        <img src="/icon/pig.svg"/>
                    </div>
                </div>
                <div class="intro">
                    <div class="intro-wrapper">
                        <div class="title">혹시 나도... 불면증?</div>
                        <p>잠 못드는 나날들</p>
                        <img src="/icon/sleep.svg"/>
                    </div>
                </div>
                <div class="intro">
                    <div class="intro-wrapper">
                        <div class="title">즉흥여행자들을<br/>위한 설문조사</div>
                        <p>너 혹시 P야?</p>
                        <img src="/icon/trip.svg"/>
                    </div>
                </div>
             </div>
             <div class="survey-btn">설문 목록 바로가기</div>
        </div>
    )
}

export default SurveyIntro;
