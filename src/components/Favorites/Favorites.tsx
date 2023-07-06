import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  createBasket,
  getFavoritesUser,
} from "../../features/favoritesSlice";
import { oneProductsFind } from "../../features/productsSlice";
import styles from "./Favorites.module.css";
// import heart from '../../assets/heart.svg'
import heartRed from "../../assets/heart-red.svg";
import Header from "../Header/Header";

export default function Favorites() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.oneProduct);
  const user = useSelector((state) => state.products.user);
  const loading = useSelector((state) => state.products.loading);
  const favorites = useSelector((state) => state.favorites.favorites);
  const token = useSelector((state) => state.application.token);

  function parseJWT(token) {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload).id;
  }
  const parsingToken = parseJWT(token);

  useEffect(() => {
    dispatch(oneProductsFind());
    dispatch(getFavoritesUser(parsingToken));
    dispatch(createBasket());
  }, []);

  function handleAddFavorite(id) {
    dispatch(addFavorite(id));
    dispatch(createBasket());
  }

  return (
    <>
      <Header />
      <div className={styles.favoritesBack}>
        {favorites.map((item) => {
          return (
            <div className={styles.productsBlock}>
              <img src={`http://localhost:4000/${item.image[0].path}`} alt="" />
              <h4>{item.title}</h4>
              <p>{item.adress}</p>
              <h5>{item.price} ₽ сутки</h5>
              <div
                onClick={() => handleAddFavorite(item._id)}
                className={styles.favoriteButtonAdded}
              >
                <img src={heartRed} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
