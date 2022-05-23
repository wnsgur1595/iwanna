import React, {useState, useEffect} from 'react';
import '../views/LandingPage/LandingPage.scss';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import PopConfirm from './PopConfirm';

interface ArticleListProps {
  curCategory: string;
}

const ArticleList: React.FC<ArticleListProps> = ({curCategory}) => {
  const [guideIsClicked, setGuideIsClicked] = useState(false);

  useEffect(() => {
    setGuideIsClicked(false);
  }, [curCategory]);

  return (
    <div className="article_list">
      <div className="category_title">
        <div>{curCategory}</div>
        <AiOutlineInfoCircle
          className="article_list_guide"
          onClick={() => setGuideIsClicked(!guideIsClicked)}
        />
        <PopConfirm guideIsClicked={guideIsClicked} />
      </div>
    </div>
  );
};

export default ArticleList;
