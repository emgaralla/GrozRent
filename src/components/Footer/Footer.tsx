import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import MoneyPopUp from "./FooterPopUps/MoneyPopUp";
import LanguagePopUp from "./FooterPopUps/LanguagePopUp";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footNav} >
        <li>© 2023, GrozRent.Inc</li>
        <li>·</li>
        <Link className={styles.link} to={"/confidentiality"}>Конфиденциальность</Link>
        <li>·</li>
        <Link className={styles.link} to={"/conditions"}>Условия</Link>
        <li>·</li>
        <Link className={styles.link} to={'/otzivs'}>Ваши отзывы и пожелания</Link>
      </ul>
      <ul className={styles.footMenu}>
        <div className={styles.language}>
        <li className={styles.languageImg}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlwQ9CJhIHHNzo_UcTMm1Z-L0wF78pUq8-_bb8dA&s"
          alt="" /></li>
        <li className={styles.languageText}><LanguagePopUp /></li>
        </div>
        <MoneyPopUp />
        <Link className={styles.link} to={"/aboutUs"}> О нас </Link>
      </ul>
    </footer>
  )
}
