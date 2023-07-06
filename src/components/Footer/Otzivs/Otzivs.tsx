import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOtziv,
  fetchOtzivs,
  postOtziv,
} from "../../../features/otzivsSlice";
import Header from "../../Header/Header";
import Footer from "../Footer";
import styles from "./Otzivs.module.css";
import { Input } from "antd";
import { Link } from "react-router-dom";
const { TextArea } = Input;
const Otzivs = () => {
  const [otziv, setOtziv] = useState("");

  const otzivs = useSelector((state) => state.otzivs.otzivs);
  const token = useSelector((state) => state.application.token);
  const loading = useSelector((state) => state.otzivs.adding);

  function parseJWT(token) {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload).id;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchUser());
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
    dispatch(deleteOtziv(idd));
  };

  return (
    <div>
      <Header />
      <h2>Ваши отзывы и пожелaния для нашего сайта!</h2>
      {otzivs.map((item) => {
        return (
          <div key={item._id} className={styles.blockForOtzivs}>
            <div className={styles.name}>{item.user.name}</div>
            <div>{item.text}</div>
            <div>
              {token && parseJWT(token) === item.user._id ? (
                <button
                  onClick={() => handleRemove(item._id)}
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                ></button>
              ) : (
                " "
              )}
            </div>
          </div>
        );
      })}
      {token ? (
        <div className={styles.formm}>
          <TextArea value={otziv} onChange={handleOtzivs} />
          <button
            onClick={handleClick}
            className="btn btn-primary"
            type="button"
          >
            Отправить
          </button>
        </div>
      ) : (
        <Link to="/login">
          {" "}
          Чтобы оставить отзыв вы должны зайти в ваш аккаунт
        </Link>
      )}
      <Footer />
    </div>
  );
};

export default Otzivs;
