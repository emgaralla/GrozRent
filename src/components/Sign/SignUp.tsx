import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignIn, authSignUp } from "../../features/applicationSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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

  const handleClick = () => {
    dispatch(authSignUp({ name, lastName, email, password }));
  };

  return (
    <div>
        <input
          value={name}
          onChange={handleChangeName}
          placeholder="Name"
          type="text"
        />
        <input
          value={lastName}
          onChange={handleChangeLastName}
          placeholder="LastName"
          type="text"
        />
        <input
          value={email}
          onChange={handleChangeEmail}
          placeholder="email"
          type="text"
        />
        <input
          value={password}
          onChange={handleChangePassword}
          placeholder="password"
          type="text"
        />
        <button onClick={handleClick}>Зарегистироваться</button>
    </div>
  );
};

export default SignUp;
