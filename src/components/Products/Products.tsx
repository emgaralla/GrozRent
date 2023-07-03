import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import styles from "./Products.module.css";

const Products = () => {
  const [search, setSearch] = useState('')
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const searched = products.filter(item => {
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item
    }
  })

  function handleChange (e) {
    setSearch(e.target.value)
  }
  
  return (
   <>
     <div className={styles.livesearch}>
      <input onChange={handleChange} value={search} className={styles.input} type="text" name="" id="" />
      {/* <img src="https://i.ibb.co/5GzdX6p/search.png"/> */}
    </div>
    <div className={styles.productsBlock}>
      {searched.map((item) => {
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
   </>
  );
};

export default Products;
