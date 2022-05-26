import React from 'react';
import {useNavigate} from 'react-router';
import '../Header.scss';

const RightMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="right_menu">
      <ul>
        <li onClick={() => navigate('/login')}>로그인</li>
        <li onClick={() => navigate('/choice')}>회원가입</li>
      </ul>
    </div>
  );
};

export default RightMenu;
