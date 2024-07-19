import React, { useState } from 'react';
import QuantitySelector from '../components/QuantitySelector';
import DropDown from '../components/DropDown';

const SurveyCreate = ({children}) => {
    const [selectedSex, setSelectedSex] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');

    const handleClick = (sex) => {
      setSelectedSex(sex);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };
    return (
        <div className="survey-create-container">
            <main className="survey-create-main">
                {children}
                <div className="create-page">
                    <div className="logo-img-wrapper">
                        <img className="logo-img" src="/icon/logo.svg" alt="Logo" />
                        <div className="create-title">Link2survey</div>
                    </div>
                    <div className="create-form-wrapper">
                        <div className="question-wrapper">
                            <div className="form-title">제목</div>
                            <input className="input" />
                        </div>
                        <div className="question-wrapper">
                            <div className="form-title">필요한 데이터수</div>
                            <QuantitySelector />
                        </div>
                        <div className="question-wrapper">
                            <div className="form-title">대상자</div>
                            <div className="subject-wrapper">
                            <div className="sex-wrapper">
                            <div
          className={`sex-area ${selectedSex === '여' ? 'selected' : ''}`}
          onClick={() => handleClick('여')}
        >
          여
        </div>
        <div
          className={`sex-area ${selectedSex === '남' ? 'selected' : ''}`}
          onClick={() => handleClick('남')}
        >
          남
        </div>
        </div>
                    <div className="job-age-wrapper">
                            <div className="job-wrapper">
                               <DropDown 
        options={['대학생/대학원생', '교수/강사', '연구원','프리랜서','회사원','자영업자']} 
        onSelect={handleOptionSelect} 
        placeholder="직업" 
      />
                            </div>
                            <div className="age-wrapper">
                            <QuantitySelector />
                            </div>
                            
                            </div>
                            <input className="note" placeholder='특이사항 기재'></input>
                            </div>
                            
                        </div>
                        
                        <div className="question-wrapper">
                            <div className="form-title">마감일</div>
                            <input className="input" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SurveyCreate;
