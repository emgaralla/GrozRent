import { Link } from "react-router-dom";
import HeaderPopUp from "../HeaderPopUp/HeaderPopUp";
import LiveSearch from "../LiveSearch/LiveSearch";
import Logo from "../Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <HeaderPopUp />
    </div>
  );
};

export default Header;
