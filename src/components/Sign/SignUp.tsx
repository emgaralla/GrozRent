import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from "../../features/applicationSlice";
import { Button, Form, Input } from "antd";
import styles from "./Sign.module.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.application.error);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(authSignUp({ name, lastName, email, password, phone }));
    setTimeout(() => {
      navigate('/login')
    },300)
  };

  return (
    <div className={styles.signUpBlock}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[{ required: true, message: "Пожалуйста введите ваше имя!" }]}
        >
          <Input value={name} onChange={handleChangeName} />
        </Form.Item>
        <Form.Item
          label="Фамилия"
          name="last name"
          rules={[
            { required: true, message: "Пожалуйста введите вашу фамилию!" },
          ]}
        >
          <Input value={lastName} onChange={handleChangeLastName} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Пожалуйста введите ваш Email!" }]}
        >
          <Input value={email} onChange={handleChangeEmail} />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Пожалуйста введите ваш Номер" }]}
        >
          <Input value={phone} onChange={handleChangePhone} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Пожалуйста введите ваш пароль!" },
          ]}
        >
          <Input.Password value={password} onChange={handleChangePassword} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onClick={handleClick} type="primary" htmlType="submit">
            Зарегистироваться
          </Button>
        </Form.Item>

        <p className={styles.errorMessage}>{error}</p>
      </Form>
    </div>
  );
};

export default SignUp;
