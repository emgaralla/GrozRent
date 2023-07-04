import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MyAd.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteImage,
  handleChangeAd,
  oneProductsFind,
} from "../../features/productsSlice";
import { RootState } from "../../app/store";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import { Input } from "antd";
import CheckOutlined from "@ant-design/icons/lib/icons/CheckOutlined";

const EditingMyAd = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { loading, oneProduct } = useSelector(
    (state: RootState) => state.products
  );

  const [titleValue, setTitleValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [addressValue, setAddressValue] = useState("");

  const [titleEditing, setTitleEditing] = useState(true);
  const [phoneEditing, setPhoneEditing] = useState(true);
  const [textEditing, setTextEditing] = useState(true);
  const [priceEditing, setPriceEditing] = useState(true);
  const [addressEditing, setAddressEditing] = useState(true);

  useEffect(() => {
    dispatch(oneProductsFind({ id }));
  }, []);

  useEffect(() => {
    setTitleValue(oneProduct.title);
    setPhoneValue(oneProduct.phone);
    setTextValue(oneProduct.text);
    setPriceValue(oneProduct.price);
    setAddressValue(oneProduct.adress);
  }, [oneProduct]);

  const handleDeleteImg = (filename) => {
    dispatch(fetchDeleteImage({ id, filename }));
  };

  const onClickChangeAd = () => {
    dispatch(
      handleChangeAd({
        id,
        titleValue,
        phoneValue,
        textValue,
        priceValue,
        addressValue,
      })
    );
    setTitleEditing(true);
    setPhoneEditing(true);
    setTextEditing(true);
    setPriceEditing(true);
    setAddressEditing(true);
  };

  return (
    <div className={styles.fullAd}>
      {titleEditing ? (
        <h4>
          {oneProduct.title}
          <span onClick={() => setTitleEditing(false)}>
            <EditOutlined />
          </span>
        </h4>
      ) : (
        <div>
          <Input
            size="small"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
          <CheckOutlined className={styles.pointer} onClick={onClickChangeAd} />
          <CloseOutlined
            className={styles.pointer}
            onClick={() => setTitleEditing(true)}
          />
        </div>
      )}
      {phoneEditing ? (
        <div>
          {oneProduct.phone}
          <span onClick={() => setPhoneEditing(false)}>
            <EditOutlined />
          </span>
        </div>
      ) : (
        <div>
          <Input
            size="small"
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
          />
          <CheckOutlined className={styles.pointer} onClick={onClickChangeAd} />
          <CloseOutlined
            className={styles.pointer}
            onClick={() => setPhoneEditing(true)}
          />
        </div>
      )}
      {textEditing ? (
        <div>
          {oneProduct.text}
          <span onClick={() => setTextEditing(false)}>
            <EditOutlined />
          </span>
        </div>
      ) : (
        <div>
          <Input
            size="small"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <CheckOutlined className={styles.pointer} onClick={onClickChangeAd} />
          <CloseOutlined
            className={styles.pointer}
            onClick={() => setTextEditing(true)}
          />
        </div>
      )}
      {priceEditing ? (
        <h5>
          {oneProduct.price} ₽ сутки
          <span onClick={() => setPriceEditing(false)}>
            <EditOutlined />
          </span>
        </h5>
      ) : (
        <div>
          <Input
            size="small"
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
          />
          <CheckOutlined className={styles.pointer} onClick={onClickChangeAd} />
          <CloseOutlined
            className={styles.pointer}
            onClick={() => setPriceEditing(true)}
          />
        </div>
      )}
      {addressEditing ? (
        <div className={styles.address}>
          {oneProduct.adress}
          <span onClick={() => setAddressEditing(false)}>
            <EditOutlined />
          </span>
        </div>
      ) : (
        <div>
          <Input
            size="small"
            value={addressValue}
            onChange={(e) => setAddressValue(e.target.value)}
          />
          <CheckOutlined className={styles.pointer} onClick={onClickChangeAd} />
          <CloseOutlined
            className={styles.pointer}
            onClick={() => setAddressEditing(true)}
          />
        </div>
      )}
      <div className={styles.main}>
        {!loading ? (
          oneProduct.image.map((item) => (
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
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default EditingMyAd;
