// import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categoriesSlice";
import { Link, useParams } from "react-router-dom";
import styles from "./Categories.module.css";

const Categories = () => {
  const id = useParams();
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
              className={(id.id !== item._id) ? styles.listBlock : styles.listBlock1}
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
