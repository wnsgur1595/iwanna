import React from 'react';
import '../views/LandingPage/LandingPage.scss';
import {AiOutlineInfoCircle} from 'react-icons/ai';

interface ArticleListProps {
  curCategory: string;
}

const ArticleList: React.FC<ArticleListProps> = ({curCategory}) => {
  return (
    <div className="article_list">
      <h1>{curCategory}</h1>
      <AiOutlineInfoCircle />
    </div>
  );
};

export default ArticleList;
