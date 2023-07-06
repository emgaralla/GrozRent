import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { oneProductsFind } from "../../features/productsSlice";
import styles from "./OneProduct.module.css";
import Header from "../Header/Header";
import Comments from "./Comments";
import { fetchComments } from "../../features/commentsSlice";

const OneProduct = () => {
  const id = useParams();
  const comments = useSelector((state) => state.comments.comments)
  const newComments = comments.filter((item) => item.product === id.id)
  console.log(newComments);
  
  const product = useSelector((state) => state.products.oneProduct);
  const user = useSelector((state) => state.products.user);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    dispatch(oneProductsFind(id));
    dispatch(fetchComments())
  }, []);


  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className={styles.OneProductBlock}>
      <Header />
      <h1>{product.title}</h1>
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
      <button
        onClick={handleClick}
        className={display ? styles.linkOtzivi : styles.nono}
      >
        Показать отзывы ({newComments.length})
      </button>
      <div>{!display && <Comments />}</div>
      <button
        onClick={handleClick}
        className={!display ? styles.linkOtzivi : styles.nono}
      >
        {" "}
        Cкрыть отзывы
      </button>
    </div>
  );
};

export default OneProduct;
