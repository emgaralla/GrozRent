import { Link, useNavigate } from "react-router-dom";
import styles from "./AddProducts.module.css";
import Logo from "../Logo";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../features/productsSlice";
import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../features/categoriesSlice";
import { Button, Form, Input } from "antd";
import { AppDispatch } from "../../app/store";

const AddProduct: React.FC = () => {
  type ImageFile = File | null;

  const [cat, setCat] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");
  const [image, setImage] = useState<ImageFile>(null);
  const [inpStyle, setInpStyle] = useState<string>(styles.inputfile);
  const [text, setText] = useState<string>("Добавить изображение");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const handleChangeTextArea = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextArea(e.target.value);
  };

  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state) => state.categories.categories);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText("Вы успешно добавили изображение");
    setInpstyle(styles.inputfil);
    setImage(e.target.files);
  };
  const handleClick = (id: string) => {
    setCat(id);
  };

  const navigate = useNavigate();
  const handleSubmit = (): void => {
    dispatch(
      createProduct({
        image,
        categorie: cat,
        text: textArea,
        price,
        title,
        phone,
        address,
      })
    );
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className={styles.addProductBody}>
      <div className={styles.header}>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className={styles.body}>
        <h1>
          Что из перечисленного точнее <br /> описывает ваш товар?
        </h1>
        <div className={styles.categories}>
          {categories.map((item) => {
            return (
              <button
                onClick={() => handleClick(item._id)}
                className={styles.oneCategory}
              >
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </button>
            );
          })}
        </div>
        <div className={styles.upload}>
          <input
            className={inpStyle}
            name="file"
            id="file"
            onChange={handleChange}
            type="file"
            multiple
            disabled={inpStyle === styles.inputfil}
          />
          <label for="file">
            <span>{text}</span>
          </label>
        </div>

        <div className={styles.forma}>
          <Form name="nest-messages" style={{ maxWidth: 600 }}>
            <Form.Item rules={[{ required: true }]}>
              <Input
                value={title}
                onChange={handleChangeTitle}
                placeholder="Название"
              />
            </Form.Item>
            <Form.Item label="" rules={[{ type: "email" }]}>
              <Input
                value={adress}
                onChange={handleChangeAdress}
                placeholder="Адрес"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={price}
                onChange={handleChangePrice}
                placeholder="Цена"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={phone}
                onChange={handleChangePhone}
                placeholder="Номер телефона"
              />
            </Form.Item>
            <Form.Item>
              <Input.TextArea
                value={textArea}
                onChange={handleChangeTextArea}
                placeholder="Опишите вашу услугу"
              />
            </Form.Item>
            <Button
              disabled={
                title.length === 0 ||
                textArea.length === 0 ||
                price.length === 0 ||
                adress.length === 0 ||
                phone.length === 0 ||
                cat.length === 0 ||
                image.length === 0
              }
              onClick={handleSubmit}
              type="primary"
              htmlType="submit"
            >
              Добавить объявление
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
