import React, {useState} from 'react';
import './common.scss';

interface PopConfirmProps {
  hide: boolean;
}

const PopConfirm: React.FC<PopConfirmProps> = ({hide}) => {
  const articleListInfo: string =
    "후속 기사를 원하시면 '신청' 버튼을 눌러주세요.";
  return (
    <div>
      <span className={hide ? 'pop_confirm clamp' : 'pop_confirm'}>
        {articleListInfo}
      </span>
    </div>
  );
};

export default PopConfirm;
