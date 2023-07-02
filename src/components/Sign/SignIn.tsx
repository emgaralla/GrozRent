import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../features/applicationSlice";
import { Button, Checkbox, Form, Input } from "antd";
import styles from './Sign.module.css'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const error = useSelector((state) => state.application.error);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    dispatch(authSignIn({ email, password }));
  };

  return (
    <div className={styles.signInBlock}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="Email"
          rules={[{ required: true, message: "Пожалуйста введите ваш Email!" }]}
        >
          <Input value={email} onChange={handleChangeEmail} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Пожалуйста введите ваш Пароль!" },
          ]}
        >
          <Input.Password value={password} onChange={handleChangePassword} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            disabled={email <= 0 || password <= 0}
            onClick={handleClick}
            type="primary"
            htmlType="submit"
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
      <p>{error}</p>
    </div>
  );
};

export default SignIn;
