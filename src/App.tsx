import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Annoucment from "./components/Announcement/Annoucment";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import AddProduct from "./components/AddProduct/AddProduct";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const token = useSelector((state) => state.application.token);

  return (
    <div className="back">
      <Routes>
        {token ? (
          <Route path="/annoucment" element={<Annoucment />} />
        ) : (
          <Route path="/annoucment" element={<Navigate to={"/login"} />} />
        )}
      </Routes>

      {location.pathname === "/" && <Header />}
      {location.pathname === "/login" && <Header />}
      {location.pathname === "/auth" && <Header />}
      {location.pathname === "/" && <Categories />}
      {location.pathname === "/" && <Products />}
      {location.pathname === "/" && <Footer />}
      <Routes>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        {!token ? (
          <Route path="/login" element={<SignIn />} />
        ) : (
          <Route path="/login" element={<Navigate to={"/"} />} />
        )}
        <Route path="/auth" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
