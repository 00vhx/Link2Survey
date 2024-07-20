import React from 'react';
import SatisFactionBtn from '../components/SatisFactionBtn';

const FinalQuestion = ({children}) => {
    return (
        <div className="final-gift-page">
        <img src='/icon/gift.svg' />
        <div className="complete-msg">
            <div className="title">설문조사 완료!</div>
            <p>포인트는 자동으로 적립됩니다</p>
        </div>
        <div className="final-container">
            <main className="final-main">
                {children}
                <div className="final-page">
                    <div className="final-wrapper">
                        <div className="text">더 좋은 설문 조사를 위해 만족도를 
                        <br/>평가해주세요</div>
                        <img src='/icon/thumb-up.svg' />
                        <SatisFactionBtn />
                        <div className="submit-btn">제출하기</div>
                </div>
                </div>
            </main>
        </div>
        </div>
    );
}

export default FinalQuestion;
