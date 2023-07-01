import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footNav} >
        <li>© 2023, GrozRent.Inc</li>
        <li>·</li>
        <li>Конфиденциальность</li>
        <li>·</li>
        <li>Условия</li>
        <li>·</li>
        <li>Карта сайта</li>
      </ul>
      <ul className={styles.footMenu}>
        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlwQ9CJhIHHNzo_UcTMm1Z-L0wF78pUq8-_bb8dA&s" alt="" /></li>
        <li>Русский(RU)</li>
        <li>₽ RUB</li>
        <li>Поддержка и ресурсы</li>
      </ul>
    </footer>
  )
}
