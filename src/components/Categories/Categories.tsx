// import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categoriesSlice";
import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.categories.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      <div className={styles.categoryBlock}>
        {categories.map((item) => {
          return (
            <Link
              className={styles.listBlock}
              to={`/category/${item._id}`}
              key={item._id}
            >
              <img className={styles.icon} src={item.image} alt="" />
              <p className={styles.text}>{item.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
