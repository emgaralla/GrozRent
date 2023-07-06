import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import styles from "./Products.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { createBasket, getFavoritesUser } from "../../features/favoritesSlice";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate("/");

  const handleClick = (id) => {
    dispatch(createBasket());
    setTimeout(() => {

      navigate(id);
    },300)
  };

  useEffect(() => {
    dispatch(fetchProducts());
    // dispatch(getFavoritesUser());
  }, []);

  const searched = products.filter((item) => {
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className={styles.liveSearch}>
        <input
          className={styles.input}
          onChange={handleChange}
          value={search}
          type="text"
        />
      </div>
      <div className={styles.products}>
        {searched.map((item) => {
          return (
            <div
              onClick={() => handleClick(item._id)}
              className={styles.productsBlock}
            >
              <img
                src={`http://localhost:4000/${item.image[0]?.path}`}
                alt=""
              />
              <h4>{item.title}</h4>
              <p>{item.adress}</p>
              <h5>{item.price} ₽ сутки</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
