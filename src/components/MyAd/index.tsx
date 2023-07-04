import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchUserProducts} from "../../features/productsSlice";
import styles from "./MyAd.module.css";
import { Link } from "react-router-dom";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";

const MyAd = () => {
  const userProducts = useSelector(
    (state: RootState) => state.products.userProducts
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchUserProducts());
  }, []);

  return (
    <div className={styles.main}>
      {userProducts.map((item) => {
        return (
          <div className={styles.myAdBlock}>
            <Link to={`/my-ad/${item._id}`}>
              <EditOutlined />
            </Link>
            <img
              className={styles.img}
              src={`http://localhost:4000/${item.image[0]?.path}`}
              alt=""
            />
            <h4>{item.title}</h4>
            <h5>{item.price} ₽ сутки</h5>
          </div>
        );
      })}
    </div>
  );
};

export default MyAd;
