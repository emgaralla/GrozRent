import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MyAd.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteImage, oneProductsFind } from "../../features/productsSlice";
import { RootState } from "../../app/store";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";

const EditingMyAd = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, oneProduct } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(oneProductsFind({ id }));
  }, []);

  const handleDeleteImg = (filename) => {
    dispatch(fetchDeleteImage({ id, filename }));
  };

  const handleChangeAd = () => {
    console.log(1);
  };
  console.log(oneProduct);

  return (
    <div className={styles.fullAd}>
      <h4>
        {oneProduct.title}
        <span onClick={handleChangeAd}>
          <EditOutlined />
        </span>
      </h4>
      <div>
        {oneProduct.phone}
        <span onClick={handleChangeAd}>
          <EditOutlined />
        </span>
      </div>
      <h5>
        {oneProduct.price} ₽ сутки
        <span onClick={handleChangeAd}>
          <EditOutlined />
        </span>
      </h5>
      <div className={styles.address}>
        {oneProduct.adress}
        <span onClick={handleChangeAd}>
          <EditOutlined />
        </span>
      </div>
      <div className={styles.main}>
        {!loading
          ? oneProduct.image.map((item) => (
              <div key={item.filename} className={styles.fullAdBlock}>
                <span
                  className={styles.removeIcon}
                  onClick={() => handleDeleteImg(item.filename)}
                >
                  <CloseOutlined />
                </span>
                <img
                  className={styles.img}
                  src={`http://localhost:4000/${item?.path}`}
                  alt=""
                />
              </div>
            ))
          : 1}
      </div>
    </div>
  );
};

export default EditingMyAd;
