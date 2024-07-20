import React from 'react';
import Sidebar  from '../../components/mypage/SideBar';
const MyPage = ({children}) => {
    return (
        <div className="mypage">
            <div className="bottom-wrapper">
        <Sidebar />
        <div className="my-profile">
            <div class="title">나의 프로필</div>
            <div class="profile-img">
                <img src=''/>
                <div class="profile-btn">프로필 수정</div>
            </div>
            <div class="survey-wrapper">
                <div className="row-wrapper">
                <div className="survey-area">
                    <h2>Total Surveys</h2>
                    <p>100</p>
                </div>
                <div className="survey-area">
                    <h2>Total Surveys</h2>
                    <p>100</p>
                </div>
                </div>
                <div className="row-wrapper">
                <div className="survey-area">
                    <h2>Total Surveys</h2>
                    <p>100</p>
                </div>
                <div class="survey-area">
                    <h2>Total Surveys</h2>
                    <p>100</p>
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default MyPage;
