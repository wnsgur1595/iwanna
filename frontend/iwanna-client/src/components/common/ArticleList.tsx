import React, {useState, useEffect} from 'react';
import './common.scss';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import PopConfirm from './PopConfirm';
import Articles from './Articles';

interface ArticleListProps {
  curCategory: string;
}

const ArticleList: React.FC<ArticleListProps> = ({curCategory}) => {
  const [guideIsClicked, setGuideIsClicked] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setGuideIsClicked(false);
  }, [curCategory]);

  return (
    <div className="article_list">
      <div className="category_title">
        <div>{curCategory}</div>
        {/* <AiOutlineInfoCircle
          className="article_list_guide"
          onClick={() => setGuideIsClicked(!guideIsClicked)}
        /> */}
        <AiOutlineInfoCircle
          className="article_list_guide"
          onMouseOver={() => setHide(true)}
          onMouseOut={() => setHide(false)}
        />
        <PopConfirm hide={hide} />
      </div>
      <Articles />
    </div>
  );
};

export default ArticleList;
