import React from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {

    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate('/login');
    };
    const onClickMain = () => {
        navigate('/');
    };
    const onClickJoin = () => {
        navigate('/join');
    };
    return (
        <div className="header">
            <div className="header-img" onClick={onClickMain}>
            LInk2Survey
            </div>
            <div className="login-wrapper">
                <div className="login" onClick={onClickLogin}>Log in</div>
                <div className="login"  onClick={onClickJoin}>Join us</div>
            </div>
        </div>
    )
}

export default Header