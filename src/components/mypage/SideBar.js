import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-area" href="/mypage">마이페이지</div>
      <div className="sidebar-area" href="/logout" >로그아웃</div>
      <div  className="sidebar-area withdrawal" href="/withdrawal" >회원탈퇴</div>
    </div>
  );
};

export default Sidebar;
