import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from "./Categories.module.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Categories from './Categories'

const ContentOnCat = () => {
    const id = useParams();
    
    const products = useSelector((state: any) => state.products.products)
    
    const categoryProducts = products.filter((item: any) => item.categorie === id.id)
    
  return (
    <div>
        <Header />
        <Categories />
    <div className={styles.products}>
        {categoryProducts.map((item: any) => {
                  return (
                    <div className={styles.productsBlock}>
                      <img src={`http://localhost:4000/${item.image[0].path}`} alt="" />
                      <h4>{item.title}</h4>
                      <p>{item.adress}</p>
                      <h5>{item.price} ₽ сутки</h5>
                    </div>
                  );
        })}
        </div>
        <Footer />
    </div>
  )
}

export default ContentOnCat
