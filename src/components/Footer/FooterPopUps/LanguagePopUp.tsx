import React, { useEffect, useRef, useState } from 'react'
import styles from "./footerPopUps.module.css"

const LanguagePopUp = () => {

  const [open, setOpen] = useState(false);
  const [curr, setSurr] = useState("Русский (RU)")
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
    setSurr("Русский (RU)")
  };

  const handleCloseTwo = () => {
    setOpen(false);
    setSurr("English (ENG)")
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
          <button className={styles.butt} onClick={handleClose}>Русский (RU)</button>
          <button className={styles.butt} onClick={handleCloseTwo}>English (ENG)</button>
        </div>
      )}
    </div>
  );
};

export default LanguagePopUp
