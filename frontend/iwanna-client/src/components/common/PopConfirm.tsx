import React from 'react';
import './common.scss';

interface PopConfirmProps {
  guideIsClicked: boolean;
}

const PopConfirm: React.FC<PopConfirmProps> = ({guideIsClicked}) => {
  const articleListInfo: string =
    "후속 기사를 원하시면 '신청' 버튼을 눌러주세요.";
  return (
    <div>
      <span className={guideIsClicked ? 'pop_confirm clamp' : 'pop_confirm'}>
        {articleListInfo}
      </span>
    </div>
  );
};

export default PopConfirm;
