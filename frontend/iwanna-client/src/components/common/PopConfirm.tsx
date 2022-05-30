import React, {useState} from 'react';
import './common.scss';

interface PopConfirmProps {
  hide: boolean;
  userType: string;
}

const PopConfirm: React.FC<PopConfirmProps> = ({hide, userType}) => {
  const articleListInfo: string =
    "후속 기사를 원하시면 버튼을 눌러 '신청' 또는 '취소'할 수 있습니다. ";
  const reporterListInfo: string =
    "작성한 후속 기사를 등록하고싶으면, '작성' 버튼을 눌러주세요.";
  return (
    <div>
      <span className={hide ? 'pop_confirm clamp' : 'pop_confirm'}>
        {userType === 'user' ? articleListInfo : reporterListInfo}
      </span>
    </div>
  );
};

export default PopConfirm;
