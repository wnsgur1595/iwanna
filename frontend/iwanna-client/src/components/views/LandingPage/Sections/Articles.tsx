import React, {useState} from 'react';
import '../../../common/common.scss';
import WriteModal from '../../../common/WriteModal';

interface ArticlesProps {
  userType: string;
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

const article_reporter_data = [
  {
    aId: 1,
    title: '[인천] 인천여성경제인협회, 산불 이재민에 천백만 원 성금',
    //url,
    isWrite: false,
    follow_num: 121,
  },
  {
    aId: 2,
    title: '[인천] "인천e음 기반 공공은행 설립 73%가 동의',
    //url
    isWrite: true,
    follow_num: 1021,
  },
  {
    a_cId: 5,
    title: '[경북] 포스코케미칼, 경북 포항에 차세대 전기차용 양극재 공장 착공',
    //url
    isWrite: false,
    follow_num: 521,
  },
];

const Articles: React.FC<ArticlesProps> = ({userType}) => {
  const [isWrite, setIsWrite] = useState(false);

  const clickModalHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    writeCheck: boolean
  ) => {
    if (!writeCheck) {
      setIsWrite(!isWrite);
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
              {userType === 'user' ? (
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
        {isWrite && <WriteModal isWrite={isWrite} setIsWrite={setIsWrite} />}
      </div>
    );
  }
};

export default Articles;
