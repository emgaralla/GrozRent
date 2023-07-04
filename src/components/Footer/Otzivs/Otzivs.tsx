import { useEffect, useState } from "react";
import { fetchUser } from "../../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteOtziv, fetchOtzivs, postOtziv } from "../../../features/otzivsSlice";
import Header from "../../Header/Header";
import Footer from "../Footer";
import styles from "./Otzivs.module.css";
import { Input } from "antd";
const { TextArea } = Input;
const Otzivs = () => {
  const [otziv, setOtziv] = useState("");
  const otzivs = useSelector((state) => state.otzivs.otzivs);

  const token = useSelector((state) => state.application.token);

  const loading = useSelector((state) => state.otzivs.adding)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchOtzivs());
  }, [loading]);

  const handleOtzivs = (e) => {
    setOtziv(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(postOtziv({ otziv }));
    setOtziv("");
  };

  const handleRemove = (idd) => {
    dispatch(deleteOtziv(idd))
  }

  return (
    <div>
      <Header />
      <h2>Ваши отзывы и пожаления для нашего сайта!</h2>
      {otzivs.map((item) => {
        return (
          <div key={item._id} className={styles.blockForOtzivs}>
            <div className={styles.name}>{item.user.name}</div>
            <div>{item.text}</div>
            <div>
              <button
                onClick={() => handleRemove(item._id)}
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
          </div>
        );
      })}
      <div className={styles.formm}>
        <TextArea value={otziv} onChange={handleOtzivs} />
        <button onClick={handleClick} className="btn btn-primary" type="button">
          Отправить
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Otzivs;
