import React from 'react';
import './RegisterPage.scss';

const ChoicePage: React.FC = () => {
  return (
    <div className="choice">
      <h2>회원 구분</h2>
      <ul>
        <li>
          <img src="img/nomal_user.png" />
          <span>일반회원</span>
        </li>
        <li>
          <img src="img/journalist.png" />
          <span>기자회원</span>
        </li>
      </ul>
    </div>
  );
};

export default ChoicePage;
