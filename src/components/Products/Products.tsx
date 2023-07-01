import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import styles from "./Products.module.css";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className={styles.productsBlock}>
      {products.map((item) => {
        return (
          <div>
            <img src={`http://localhost:4000/${item.image[0].path}`} alt="" />
            <h4>{item.title}</h4>
            <p>{item.adress}</p>
            <h5>{item.price} ₽</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
