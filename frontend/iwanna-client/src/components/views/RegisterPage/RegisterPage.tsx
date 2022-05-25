import React from 'react';
import './RegisterPage.scss';

const RegisterPage = () => {
  return (
    <div className="register">
      <form>
        <span className="service_title">회원가입</span>
        <span className="required">*필수 입력</span>
        <div>
          <span className="required_icon">*</span>
          <input placeholder="이름" />
        </div>
        <div>
          <span className="required_icon">*</span>
          <input placeholder="아이디" />
        </div>
        <div>
          <span className="required_icon">*</span>
          <input placeholder="이메일" />
        </div>
        <div>
          <span className="required_icon">*</span>
          <input placeholder="비밀번호" />
        </div>
        <div>
          <span className="required_icon">*</span>
          <input placeholder="비밀번호 확인" />
        </div>
        <button>회원가입</button>
      </form>
    </div>
  );
};

export default RegisterPage;
