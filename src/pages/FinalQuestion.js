import React from 'react';
import SatisFactionBtn from '../components/SatisFactionBtn';

const FinalQuestion = ({children}) => {
    return (
        <div className="final-container">
            <main className="final-main">
                {children}
                <div className="final-page">
                    <div className="final-wrapper">
                        <div className="complete-msg">
                        설문조사 완료!
                        </div>
                        <div className="text">더 좋은 설문 조사를 위해 만족도를 
                        <br/>평가해주세요</div>
                        <p>해당 설문조사의 질문의 퀄리티, 편향성 등을 종합하여 만족도를 표시해주세요.</p>
                        <img src='/icon/thumb-up.svg' />
                        <SatisFactionBtn />
                        <div className="submit-btn">제출하기</div>
                </div>
                </div>
            </main>
        </div>
    );
}

export default FinalQuestion;
