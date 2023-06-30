import styles from "./HeaderPopUp.module.css";
import user from "../../assets/user.png";
import "boxicons";
const HeaderPopUp = () => {
  return (
    <div className={styles.block}>
      <div className={styles.hrs}>
        <box-icon name="menu"></box-icon>
      </div>
      <div className={styles.avatarBack}>
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default HeaderPopUp;
