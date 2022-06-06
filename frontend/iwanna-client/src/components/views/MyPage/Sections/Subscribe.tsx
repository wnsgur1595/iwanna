import React from 'react';
import {HiSearch} from 'react-icons/hi';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <form>
        <input />
        <HiSearch className="search_mypage_icon" />
      </form>
      <ul className="subscribe_list">
        <li>
          <span>[인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금</span>
          <button>구독 취소</button>
        </li>
      </ul>
    </div>
  );
};

export default Subscribe;
