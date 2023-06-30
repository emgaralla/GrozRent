import styles from "./HeaderPopUp.module.css";
import user from "../../assets/user.png";
import "boxicons";
import { Link } from "react-router-dom";

const HeaderPopUp = () => {
  
  return (
    <div className={styles.main}>
      <Link>Сдать в аренду</Link>
      <div className={styles.block}>
        <div className={styles.hrs}>
          <box-icon name="menu"></box-icon>
        </div>
        <div className={styles.avatarBack}>
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderPopUp;
