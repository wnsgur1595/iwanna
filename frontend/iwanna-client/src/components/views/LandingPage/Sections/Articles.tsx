import React, {useState} from 'react';
import '../../../common/common.scss';
import WriteModal from '../../../common/WriteModal';
import {
  article_temp_data,
  article_reporter_data,
} from '../../../temp-data/data';

interface ArticlesProps {
  userType: string;
  isLogin: boolean;
}

const Articles: React.FC<ArticlesProps> = ({userType, isLogin}) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickModalHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    writeCheck: boolean
  ) => {
    if (!writeCheck) {
      setIsClicked(!isClicked);
    }
  };

  if (userType === 'user') {
    return (
      <ul className="articles">
        {article_temp_data.map((article) => (
          <li>
            <div
              className={
                article.parentArticle || article.childArticle
                  ? 'article_main clamp'
                  : 'article_main'
              }
            >
              <span>{article.title}</span>
              {isLogin ? (
                <button
                  className={
                    article.isFollow
                      ? 'button_article_follow'
                      : 'button_article_follow clamp'
                  }
                >
                  신청
                </button>
              ) : null}
            </div>
            {(article.parentArticle || article.childArticle.length > 0) && (
              <div className="article_sub">
                {article.parentArticle && (
                  <div>
                    <span>해당 기사의 선행 뉴스입니다.</span>
                    <span>{article.parentArticle}</span>
                  </div>
                )}
                {article.childArticle.length > 0 && (
                  <div>
                    <span>해당 기사의 후속 뉴스입니다.</span>
                    <span>
                      {article.childArticle[0].title}{' '}
                      <b>외 {article.childArticle.length}건</b>
                    </span>
                    <button>더보기</button>
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <div>
        <ul className="articles">
          {article_reporter_data.map((article) => (
            <li>
              <div className={'article_main'}>
                <span>{article.title}</span>
                <button
                  className={
                    article.isWrite
                      ? 'button_article_follow'
                      : 'button_article_follow clamp'
                  }
                  onClick={(e) => clickModalHandler(e, article.isWrite)}
                >
                  작성
                </button>
                <div className={'article_follows'}>
                  {article.follow_num
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </div>
              </div>
            </li>
          ))}
        </ul>
        {isClicked && (
          <WriteModal isClicked={isClicked} setIsClicked={setIsClicked} />
        )}
      </div>
    );
  }
};

export default Articles;
