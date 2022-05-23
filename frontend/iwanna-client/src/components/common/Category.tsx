import React, {useState} from 'react';
import './common.scss';
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
  // setCurCategory: React.Dispatch<React.SetStateAction<string>>;
  setCurCategoryIdx: React.Dispatch<React.SetStateAction<number>>;
}

const Category: React.FC<CategoryProps> = ({
  userCategory,
  setUserCategory,
  // setCurCategory,
  setCurCategoryIdx,
}) => {
  const categoryClickHandler = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    name: string,
    idx: number
  ) => {
    setUserCategory(
      userCategory.map((category) =>
        name === category.name
          ? {...category, isClicked: true}
          : {...category, isClicked: false}
      )
    );
    // setCurCategory(name);
    setCurCategoryIdx(idx);
  };

  return (
    <ul className="news_category">
      {userCategory.map((category, idx) => {
        return category.isClicked ? (
          <li className="category active" key={category.id}>
            {category.name} <AiOutlineRightCircle className="category_icon" />
          </li>
        ) : (
          <li
            className="category"
            key={category.id}
            onClick={(e) => categoryClickHandler(e, category.name, idx)}
          >
            {category.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
