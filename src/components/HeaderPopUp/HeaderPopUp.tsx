import React, { useEffect, useRef } from "react";
import styles from "./HeaderPopUp.module.css";
import user from "../../assets/user.png";
import "boxicons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const HeaderPopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const token = useSelector((state:RootState) => state.application.token)

  const onClickPopUp = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !event.composedPath().includes(menuRef.current)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.main}>
      <Link to="/annoucment">Сдать в аренду</Link>
      <div ref={menuRef} className={styles.block} onClick={onClickPopUp}>
        <div className={styles.hrs}>
          <box-icon name="menu"></box-icon>
        </div>
        <div className={styles.avatarBack}>
          <img src={user} alt="" />
        </div>
      </div>

      {token
        ? isOpen && (
            <div className={styles.popUp}>
              <Link to="/">Профиль</Link>
              <Link to="/">Что-то</Link>
            </div>
          )
        : isOpen && (
            <div className={styles.popUp}>
              <Link to="/login">Войти</Link>
              <Link to="/auth">Зарегистрироваться</Link>
            </div>
          )}
    </div>
  );
};

export default HeaderPopUp;
