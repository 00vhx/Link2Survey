import React, { useState } from 'react';
import DropDown from '../components/DropDown';

const Join = ({ children }) => {
    const [gender, setGender] = useState('');
    const [setSelectedOption] = useState('');
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };

    return (
        <div className="join-container">
            <main className="join-main">
                {children}
                <div className="join-page">
                    <div className="logo-img-wrapper">
                        <img className="logo-img" src="/icon/logo.svg" alt="Logo" />
                        <div className="join-title">Link2survey 회원가입</div>
                    </div>
                    <div className="join-form-wrapper">
                        <div>
                            <p>이메일<strong>*</strong></p>
                            <input
                                type="email"
                                placeholder="이메일 주소를 입력해주세요"
                                className="input"
                            />
                        </div>
                        <div>
                            <p>비밀번호<strong>*</strong></p>
                            <input
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                className="input"
                            />
                        </div>
                        <div>
                            <p>이름<strong>*</strong></p>
                            <input
                                type="input"
                                placeholder="이름을 입력해주세요"
                                className="input"
                            />
                        </div>
                        <div>
                            <p>휴대폰 번호<strong>*</strong></p>
                            <div className="phone-wrapper">
                            <input
                                type="input"
                                className="phone-number"
                            />-
                            <input
                                type="input"
                                className="phone-number"
                            />-
                            <input
                                type="input"
                                className="phone-number"
                            /></div>
                        </div>
                        <div>
                            <p>직업</p>
                            <DropDown 
        options={['대학생/대학원생', '교수/강사', '연구원','프리랜서','회사원','자영업자','기타']} 
        onSelect={handleOptionSelect} 
        placeholder="직업을 선택해주세요" 
      />
                        </div>
                        <div>
                            <p>성별<strong>*</strong></p>
                            <div className="sex-wrapper">
                            <label>
                                <input 
                                    type="radio" 
                                    value="남" 
                                    checked={gender === '남'} 
                                    onChange={handleChange} 
                                />
                                남
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    value="여" 
                                    checked={gender === '여'} 
                                    onChange={handleChange} 
                                />
                                여
                            </label>
                            </div>
                        </div>
                        <div>
                            <p>생년월일</p>
                            <input
                                type="input"
                                placeholder="생년월일을 입력해주세요"
                                className="input"
                            />
                        </div>
                        <div className="join-btn">가입하기</div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Join;
