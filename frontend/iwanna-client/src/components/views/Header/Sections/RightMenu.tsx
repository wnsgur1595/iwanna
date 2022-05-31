import React from 'react';
import {useNavigate} from 'react-router';
import '../Header.scss';
import {BsFillBellFill} from 'react-icons/bs';

interface RightMenuProps {
  isLogin: boolean;
  isUser: boolean;
}

const temp_data = [
  {
    id: 'a_1',
    title:
      '[인천] 인천여성경제인협회, 산불 이재민에 천백만 원성금 뉴스의 후속 뉴스가 보도되었습니다.',
  },
  {
    id: 'a_2',
    title: `[이엔피] "이준석'강용석과 밥도 먹고 술도 많이 마신 사이'발인" 뉴스의 후속 뉴스가 보도되었습니다.`,
  },
];

const RightMenu: React.FC<RightMenuProps> = ({isLogin, isUser}) => {
  const navigate = useNavigate();
  const name = '박민석';

  if (!isLogin) {
    return (
      <div className="right_menu">
        <ul>
          <li onClick={() => navigate('/login')}>로그인</li>
          <li onClick={() => navigate('/choice')}>회원가입</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="right_menu">
        <ul>
          <li>
            {temp_data.length > 0 && <div className="heaer_icon_spot"></div>}
            <BsFillBellFill className="header_icon" />
          </li>
          {isUser ? <li>{name}님</li> : <li>{name}기자님</li>}
          <li onClick={() => navigate('/')}>마이페이지</li>
        </ul>
      </div>
    );
  }
};

export default RightMenu;
