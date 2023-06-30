import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignIn } from "../../features/applicationSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
    <div>
      <input
        value={email}
        onChange={handleChangeEmail}
        placeholder="Email"
        type="text"
      />
      <input
        value={password}
        onChange={handleChangePassword}
        placeholder="password"
        type="password"
      />
      <button onClick={handleClick}>Войти</button>
    </div>
  );
};

export default SignIn;
