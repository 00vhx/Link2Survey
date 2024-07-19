import React from 'react';

const Login = ({children}) => {
    return (
        <div className="login-container">
            <main className="login-main">
                {children}
                <div className="login-page">
                    <div className="logo-img-wrapper">
                        <img className="logo-img" src="/icon/logo.svg" alt="Logo" />
                        <div className="login-title">Link2survey 로그인</div>
                    </div>
                    <div className="login-form-wrapper">
                        <input
                            type="email"
                            placeholder="이메일 주소를 입력해주세요"
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                            className="input"
                        />
                        <div className="division-wrapper">
                            <span>OR</span>
                        </div>
                        <div className="social-login">
                            소셜간편 로그인
                            <img src="/icon/kakao_login.svg" alt="Kakao Login" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;
