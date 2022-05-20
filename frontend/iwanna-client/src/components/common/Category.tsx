import React, {useState} from 'react';
import '../views/LandingPage/LandingPage.scss';
import {AiOutlineRightCircle} from 'react-icons/ai';

interface CategoryProps {
  userCategory: {id: string; name: string; isClicked: boolean}[];
  setUserCategory: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        name: string;
        isClicked: boolean;
      }[]
    >
  >;
  setCurCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Category: React.FC<CategoryProps> = ({
  userCategory,
  setUserCategory,
  setCurCategory,
}) => {
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
    setCurCategory(name);
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
