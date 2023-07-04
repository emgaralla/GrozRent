import React, { useEffect, useState } from "react";
import styles from "./Settings.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchUser, handleChangeUser } from "../../features/userSlice";
import { Descriptions, Input } from "antd";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import CheckOutlined from "@ant-design/icons/lib/icons/CheckOutlined";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";

const Settings = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const [editName, setEditName] = useState(true);
  const [editLastName, setEditLastName] = useState(true);
  const [editEmail, setEditEmail] = useState(true);
  const [editPhone, setEditPhone] = useState(true);

  const [nameValue, setNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const onClickChangeUser = () => {
    dispatch(
      handleChangeUser({ nameValue, lastNameValue, emailValue, phoneValue })
    );

    setEditName(true);
    setEditLastName(true);
    setEditEmail(true);
    setEditPhone(true);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    setNameValue(user.name);
    setLastNameValue(user.lastName);
    setEmailValue(user.email);
    setPhoneValue(user.phone);
  }, [user]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.settingsBlock}>
          <Descriptions title="Информация о пользователе">
            <Descriptions.Item label="Имя">
              {editName ? (
                <>
                  {user.name}
                  <span
                    className={styles.pointer}
                    onClick={() => setEditName(false)}
                  >
                    <EditOutlined />
                  </span>
                </>
              ) : (
                <>
                  <Input
                    size="small"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
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
                  <span
                    className={styles.pointer}
                    onClick={() => setEditLastName(false)}
                  >
                    <EditOutlined />
                  </span>
                </>
              ) : (
                <>
                  <Input
                    size="small"
                    value={lastNameValue}
                    onChange={(e) => setLastNameValue(e.target.value)}
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
                  <span
                    className={styles.pointer}
                    onClick={() => setEditEmail(false)}
                  >
                    <EditOutlined />
                  </span>
                </>
              ) : (
                <>
                  <Input
                    size="small"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
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
                  <span
                    className={styles.pointer}
                    onClick={() => setEditPhone(false)}
                  >
                    <EditOutlined />
                  </span>
                </>
              ) : (
                <>
                  <Input
                    size="small"
                    value={phoneValue}
                    onChange={(e) => setPhoneValue(e.target.value)}
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
