import React, {useState, useEffect} from 'react';
import '../../../common/common.scss';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import PopConfirm from '../../../common/PopConfirm';
import Articles from './Articles';

interface ArticleListProps {
  curCategory: string;
  userType: string;
}

const ArticleList: React.FC<ArticleListProps> = ({curCategory, userType}) => {
  const [hide, setHide] = useState(false);

  return (
    <div className="article_list">
      <div className="category_title">
        <div>{curCategory}</div>
        <AiOutlineInfoCircle
          className="article_list_guide"
          onMouseOver={() => setHide(true)}
          onMouseOut={() => setHide(false)}
        />
        <PopConfirm hide={hide} userType={userType} />
      </div>
      <Articles userType={userType} />
    </div>
  );
};

export default ArticleList;
