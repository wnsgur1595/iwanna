import React from 'react';
import './common.scss';

interface ArticleData {
  aId: number;
  title: string;
  isFoolow: boolean;
  parentArticle: string;
  childArticle: {
    a_cId: number;
    title: string;
  }[];
}

const article_temp_data = [
  {
    aId: 1,
    title: '[인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금',
    //url
    isFollow: false,
    parentArticle: '',
    childArticle: [
      {
        a_cId: 1,
        title: '[후속1] 인천여성경제인협회, 산불 이재민에 천백만 원 성금',
        //url
      },
      {
        a_cId: 2,
        title: '[후속2] 인천여성경제인협회, 산불 이재민에 천백만 원 성금',
        //url
      },
      {
        a_cId: 3,
        title: '[후속3] 인천여성경제인협회, 산불 이재민에 천백만 원 성금',
        //url
      },
      {
        a_cId: 4,
        title: '[후속4] 인천여성경제인협회, 산불 이재민에 천백만 원 성금',
        //url
      },
    ],
  },
  {
    aId: 2,
    title: '[인천] "인천e음 기반 공공은행 설립 73%가 동의',
    //url
    isFollow: true,
    parentArticle: '',
    childArticle: [
      {
        a_cId: 1,
        title: '[후속1] [인천] "인천e음 기반 공공은행 설립 73%가 동의',
        //url
      },
      {
        a_cId: 2,
        title: '[후속2] [인천] "인천e음 기반 공공은행 설립 73%가 동의',
        //url
      },
    ],
  },
  {
    a_cId: 5,
    title: '[후속] 포스코케미칼, 경북 포항에 차세대 전기차용 양극재 공장 착공',
    //url
    isFollow: false,
    parentArticle:
      '[선행] 포스코케미칼, 경북 포항에 차세대 전기차용 양극재 공장 착공',
    childArticle: [],
  },
  {
    a_cId: 5,
    title: '[경기] 경북 포항에 차세대 전기차용 양극재 공장 착공',
    //url
    isFollow: true,
    parentArticle: '',
    childArticle: [],
  },
];

const Articles = () => {
  return (
    <ul className="articles">
      {article_temp_data.map((article) => (
        <li>
          {/* <div className="article_main"> */}
          <div
            className={
              article.parentArticle || article.childArticle
                ? 'article_main clamp'
                : 'article_main'
            }
          >
            <span>{article.title}</span>
            <button
              className={
                article.isFollow
                  ? 'button_article_follow clamp'
                  : 'button_article_follow'
              }
            >
              신청
            </button>
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
};

export default Articles;
