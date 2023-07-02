import React, { useEffect, useRef, useState } from "react";
import styles from "./footerPopUps.module.css"

const MoneyPopUp = () => {
  const [open, setOpen] = useState(false);
  const [curr, setSurr] = useState("₽ RUB")
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
    setSurr("₽ RUB")
  };

  const handleCloseTwo = () => {
    setOpen(false);
    setSurr("$ USD")
  };

  useEffect(() => {
    const handleClickOut = (event: MouseEvent) => {
      if (menuRef.current && !event.composedPath().includes(menuRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOut);
    return () => {
      document.body.removeEventListener("click", handleClickOut);
    };
  }, []);
  return (
    <div>
      <button className={(!open) ? styles.butt : styles.noneBut} onClick={handleClick}>{curr}</button>
      {open && (
        <div className={styles.blockCur}>
          <button className={styles.butt} onClick={handleClose}>₽ RUB</button>
          <button className={styles.butt} onClick={handleCloseTwo}>$ USD</button>
        </div>
      )}
    </div>
  );
};

export default MoneyPopUp;
