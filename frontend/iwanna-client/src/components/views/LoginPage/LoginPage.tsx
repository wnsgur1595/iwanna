import React from 'react';
import './LoginPage.scss';

const LoginPage = () => {
  return (
    <div className="login">
      <form>
        <span>IWANNA</span>
        <input placeholder="아이디" />
        <input placeholder="비밀번호" />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
