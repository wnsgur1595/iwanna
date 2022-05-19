import React, {useState} from 'react';
import '../views/LandingPage/LandingPage.scss';
import {AiOutlineRightCircle} from 'react-icons/ai';

const Category: React.FC = () => {
  const [userCategory, setUserCategory] = useState([
    {id: 'ic_u_0', name: '최신뉴스', isClicked: true},
    {id: 'ic_u_1', name: '많이 본 뉴스', isClicked: false},
    {id: 'ic_u_2', name: '정치', isClicked: false},
    {id: 'ic_u_3', name: '경제', isClicked: false},
    {id: 'ic_u_4', name: '사회', isClicked: false},
    {id: 'ic_u_5', name: '스포츠', isClicked: false},
    {id: 'ic_u_6', name: '날씨', isClicked: false},
  ]);

  const categoryClickHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    name: string
  ) => {
    setUserCategory(
      userCategory.map((category) =>
        name === category.name
          ? {...category, isClicked: true}
          : {...category, isClicked: false}
      )
    );
  };

  return (
    <ul className="news_category">
      {userCategory.map((category) => {
        return category.isClicked ? (
          <li className="category active" key={category.id}>
            {category.name} <AiOutlineRightCircle className="category_icon" />
          </li>
        ) : (
          <li
            className="category"
            key={category.id}
            onClick={(e) => categoryClickHandler(e, category.name)}
          >
            {category.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
