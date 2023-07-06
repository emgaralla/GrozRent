import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { oneProductsFind } from "../../features/productsSlice";
import styles from "./OneProduct.module.css";
import { addFavorite, createBasket, getFavoritesUser } from "../../features/favoritesSlice";
import heart from '../../assets/heart.svg'
import heartRed from '../../assets/heart-red.svg'
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
  const token = useSelector((state) => state.application.token);



  useEffect(() => {
    dispatch(oneProductsFind(id));
    dispatch(getFavoritesUser(parsingToken));
  }, []);


  const id = useParams();

  function parseJWT (token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload).id
  }
  const parsingToken = parseJWT(token)
  

  // console.log(user);

  function handleAddFavorite () {
    dispatch(createBasket())
    dispatch(addFavorite(id.id))
  }
  const favorites = useSelector(state => state.favorites.favorites)
  // console.log(favorites)

  let isFavorite
  if (favorites.length) {
    favorites.forEach(item => {
      if (item._id === id.id) {
        isFavorite = true
      }
      else {
        isFavorite = false
      }
    });
  }
  console.log(isFavorite)
  
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
      <div
        onClick={handleAddFavorite} 
        className={isFavorite ? styles.favoriteButtonAdded : styles.favoriteButton}>
        <img src={isFavorite ? heartRed : heart} alt="" />
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
