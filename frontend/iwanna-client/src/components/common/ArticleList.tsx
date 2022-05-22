import React, {useState} from 'react';
import '../views/LandingPage/LandingPage.scss';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {Button, notification} from 'antd';

interface ArticleListProps {
  curCategory: string;
}

const articleListInfo: string =
  "후속 기사를 원하시면 '신청' 버튼을 눌러주세요.";

const openNotificationWithIcon = (text: string) => {
  notification.open({
    message: text,
  });
};

const ArticleList: React.FC<ArticleListProps> = ({curCategory}) => {
  const [guideIsClicked, setGuideIsClicked] = useState(false);

  return (
    <div className="article_list">
      <div className="category_title">
        <div>{curCategory}</div>
        <Button
          type="link"
          onClick={() => openNotificationWithIcon(articleListInfo)}
        >
          <AiOutlineInfoCircle
            className="article_list_guide"
            onClick={() => setGuideIsClicked(!guideIsClicked)}
          />
        </Button>
        {/* <PopConfirm guideIsClicked={guideIsClicked} /> */}
      </div>
    </div>
  );
};

export default ArticleList;
