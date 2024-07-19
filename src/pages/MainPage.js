import React from 'react';
import Main from './Main';
import SurveyIntro from './SurveyIntro';
import SurveyInfo from './SurveyInfo';

import Faq from './Faq';

const MainPage = ({children}) => {
    return (
        <div>
            <main>
                {children}
            <div className="main-wrapper">
                <img className="logo-img" src="/icon/logo.svg" alt="Logo" />
                <div className="title">Link2Survey</div>
                <p>양방향 설문조사 커뮤니티</p>
                <img src="icon/main_img.webp" />
            </div>
            <Main />
            <SurveyIntro />
            <SurveyInfo />
            <Faq />
            </main>
        </div>
    );
};

export default MainPage;