import React from 'react';
import {HiSearch} from 'react-icons/hi';
import {GrClose} from 'react-icons/gr';
import '../MyPage.scss';

const History = () => {
  return (
    <div className="history">
      <form>
        <input />
        <HiSearch className="search_mypage_icon" />
      </form>
      <button className="button_delete_history_all">전체 삭제</button>
      <ul className="history_list">
        <li className="history_date">
          <div>
            <span>오늘</span>
            <GrClose className="button_delete_history" />
          </div>
          <ul>
            <li>
              <span>
                [인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금
              </span>
              <GrClose className="button_delete_history" />
            </li>
            <li>
              <span>
                [인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금
              </span>
              <GrClose className="button_delete_history" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default History;
