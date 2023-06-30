import HeaderPopUp from "../HeaderPopUp/HeaderPopUp";
import LiveSearch from "../LiveSearch/LiveSearch";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>GrozRent</div>
      <LiveSearch />
      <HeaderPopUp />
    </div>
  );
};

export default Header;
