import React from 'react';
import History from './History';
import Subscribe from './Subscribe';

interface MyPageContentsProps {
  curCategory: string;
}

const MyPageContents: React.FC<MyPageContentsProps> = ({curCategory}) => {
  return (
    <div className="mypage_contents">
      <div className="category_title">
        <div className="category_name">{curCategory}</div>
      </div>
      {curCategory === '구독한 기사' && <Subscribe />}
      {curCategory === '기록' && <History />}
    </div>
  );
};

export default MyPageContents;
