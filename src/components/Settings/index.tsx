import React, { useEffect, useState } from "react";
import styles from "./Settings.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchUser, handleChangeUser } from "../../features/userSlice";
import { Descriptions, Input } from "antd";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import CheckOutlined from "@ant-design/icons/lib/icons/CheckOutlined";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import Header from "../Header/Header";

const Settings = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const [editName, setEditName] = useState(true);
  const [editLastName, setEditLastName] = useState(true);
  const [editEmail, setEditEmail] = useState(true);
  const [editPhone, setEditPhone] = useState(true);

  const [nameValue, setNameValue] = useState(user.name);
  const [lastNameValue, setLastNameValue] = useState(user.lastName);
  const [emailValue, setEmailValue] = useState(user.email);
  const [phoneValue, setPhoneValue] = useState(user.phone);

  const handleChangeName = (e) => {
    setNameValue(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastNameValue(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhoneValue(e.target.value);
  };

  const onClickChangeUser = () => {
    dispatch(
      handleChangeUser({ nameValue, lastNameValue, emailValue, phoneValue })
    );
    setEditName(true);
    setEditLastName(true);
    setEditEmail(true);
    setPhoneValue(true);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.settingsBlock}>
          <Descriptions title="Информация о пользователе">
            <Descriptions.Item label="Имя">
              {editName ? (
                <>
                  {user.name}
                  <span className={styles.pointer}>
                    <EditOutlined onClick={() => setEditName(false)} />
                  </span>
                </>
              ) : (
                <>
                  <Input
                    size="small"
                    value={nameValue}
                    onChange={handleChangeName}
                  />
                  <CheckOutlined
                    className={styles.pointer}
                    onClick={onClickChangeUser}
                  />
                  <CloseOutlined
                    className={styles.pointer}
                    onClick={() => setEditName(true)}
                  />
                </>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Фамилия">
              {editLastName ? (
                <>
                  {user.lastName}
                  <span className={styles.pointer}>
                    <EditOutlined onClick={() => setEditLastName(false)} />
                  </span>
                </>
              ) : (
                <>
                  <Input
                    size="small"
                    value={lastNameValue}
                    onChange={handleChangeLastName}
                  />
                  <CheckOutlined
                    className={styles.pointer}
                    onClick={onClickChangeUser}
                  />
                  <CloseOutlined
                    className={styles.pointer}
                    onClick={() => setEditLastName(true)}
                  />
                </>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Почта">
              {editEmail ? (
                <>
                  {user.email}
                  <span className={styles.pointer}>
                    <EditOutlined onClick={() => setEditEmail(false)} />
                  </span>
                </>
              ) : (
                <>
                  <Input
                    size="small"
                    value={emailValue}
                    onChange={handleChangeEmail}
                  />
                  <CheckOutlined
                    className={styles.pointer}
                    onClick={onClickChangeUser}
                  />
                  <CloseOutlined
                    className={styles.pointer}
                    onClick={() => setEditEmail(true)}
                  />
                </>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Номер телефона">
              {editPhone ? (
                <>
                  {user.phone}
                  <span className={styles.pointer}>
                    <EditOutlined onClick={() => setEditPhone(false)} />
                  </span>
                </>
              ) : (
                <>
                  <Input
                    size="small"
                    value={phoneValue}
                    onChange={handleChangePhone}
                  />
                  <CheckOutlined
                    className={styles.pointer}
                    onClick={onClickChangeUser}
                  />
                  <CloseOutlined
                    className={styles.pointer}
                    onClick={() => setEditPhone(true)}
                  />
                </>
              )}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </>
  );
};

export default Settings;
