import Logo from "../Logo";
import styles from "./Annoucment.module.css";
import imageOne from "../../assets/da2e1a40-a92b-449e-8575-d8208cc5d409 (1).webp";
import imageTwo from "../../assets/bfc0bc89-58cb-4525-a26e-7b23b750ee00.webp";
import imageThree from "../../assets/c0634c73-9109-4710-8968-3e927df1191c.webp";
import { Link } from "react-router-dom";

const Annoucment = () => {
  return (
    <div>
      <div className={styles.header}>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className={styles.body}>
        <div className={styles.leftBlock}>
          <h1>
            Сдать в аренду на <br /> GrozRent несложно
          </h1>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.block}>
            <div className={styles.textBlock}>
              <h4>1 Расскажите нам о услуге которую предоставляете</h4>
              <br />
              <p>
                Поделитесь основными сведениями, например <br /> где вы
                находитесь
              </p>
            </div>
            <img src={imageOne} alt="" />
          </div>
          <hr />

          <div className={styles.block}>
            <div className={styles.textBlock}>
              <h4>2 Яркая и заметная страница</h4>
              <br />
              <p>
                Добавьте как минимум 5 фотографий, название <br /> объявления и
                описание. Мы поможем.
              </p>
            </div>
            <img src={imageTwo} alt="" />
          </div>
          <hr />

          <div className={styles.block}>
            <div className={styles.textBlock}>
              <h4>3 Завершите и разместите объявление</h4>
              <br />
              <p>
                Нужно установить начальную цену. Если готовы, можно публиковать
                объявление.
              </p>
            </div>
            <img src={imageThree} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <hr />
        <Link to="/addproduct">Начать</Link>
      </div>
    </div>
  );
};

export default Annoucment;
