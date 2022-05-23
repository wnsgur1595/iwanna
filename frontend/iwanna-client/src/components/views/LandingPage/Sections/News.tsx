import React, {useState} from 'react';
import ArticleList from '../../../common/ArticleList';
import Category from '../../../common/Category';
import '../../../common/common.scss';

const News: React.FC = () => {
  const [userCategory, setUserCategory] = useState([
    {id: 'ic_u_0', name: '최신 뉴스', isClicked: true},
    {id: 'ic_u_1', name: '많이 본 뉴스', isClicked: false},
    {id: 'ic_u_2', name: '정치', isClicked: false},
    {id: 'ic_u_3', name: '경제', isClicked: false},
    {id: 'ic_u_4', name: '사회', isClicked: false},
    {id: 'ic_u_5', name: '스포츠', isClicked: false},
    {id: 'ic_u_6', name: '날씨', isClicked: false},
  ]);
  // const [curCategory, setCurCategory] = useState(userCategory[0].name);
  const [curCategoryIdx, setCurCategoryIdx] = useState(0);

  return (
    <div className="news">
      <Category
        userCategory={userCategory}
        setUserCategory={setUserCategory}
        // setCurCategory={setCurCategory}
        setCurCategoryIdx={setCurCategoryIdx}
      />
      <ArticleList curCategory={userCategory[curCategoryIdx].name} />
    </div>
  );
};

export default News;
