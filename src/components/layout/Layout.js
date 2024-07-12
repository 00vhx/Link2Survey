import React from 'react';
import Main from './Main';
import SurveyIntro from './SurveyIntro';
import SurveyInfo from './SurveyInfo';
import Hedaer from './Header';
import Faq from './Faq';
const Layout = () => {
    return (
        <div>
            <Hedaer/>
            <div className="main-wrapper">
                <img className="logo-img" src="/icon/logo.svg" alt="Logo" />
                <div className="title">Link2Survey</div>
                <p>양방향 설문조사 커뮤니티</p>
            </div>
            <Main />
            <SurveyIntro />
            <SurveyInfo />
            <Faq />
        </div>
    );
};

export default Layout;
