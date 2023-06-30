import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/categories";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/auth" element={<SignUp />}></Route>
      </Routes>
      <Categories />
    </div>
  );
}

export default App;
