import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { oneProductsFind } from "../../features/productsSlice";
import styles from "./OneProduct.module.css";
import Header from "../Header/Header";

const OneProduct = () => {
  const product = useSelector((state) => state.products.oneProduct);
  const user = useSelector((state) => state.products.user);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(oneProductsFind(id));
  }, []);

  const id = useParams();

  return (
    <div className={styles.OneProductBlock}>
      <Header />
      <h1>{product.title}</h1>
      <Link className={styles.linkOtzivi}>Отзывы</Link>
      <div className={styles.imgBlock}>
        {!loading ? (
          <>
            <div className={styles.imgBlock1}>
              {product.image.map((item) => {
                return (
                    <img src={`http://localhost:4000/${item.path}`} alt="" />
                );
              })}
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
      <div className={styles.nameBlock}>
        <div className={styles.nameBlock1}>
          <h1>{product.adress}</h1>
          <hr />
          <p>{product.text}</p>
        </div>
        <div className={styles.nameBlock2}>
          <h4>Цена:</h4>
          <p>{product.price} ₽ день</p>
          <h4>Имя:</h4>
          <p>{user.name}</p>
          <h4>Номер для связи: </h4>
          <p>{product.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
