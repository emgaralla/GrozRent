import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Annoucment from "./components/Announcement/Annoucment";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import AddProduct from "./components/AddProduct/AddProduct";
import Input from "./components/Input";

function App() {
  const location = useLocation();
  // console.log(location)

  return (
    <div className="back">
      <Routes>
        <Route path="/annoucment" element={<Annoucment />} />
      </Routes>

      {location.pathname === "/" && <Header />}
      {location.pathname === "/" && <Categories />}
      {location.pathname === "/" && <Products />}
      {location.pathname === "/" && <Footer />}
      <Routes>
        <Route path="/new" element={<Input/>}/>
        <Route path="/addproduct" element={<AddProduct/>}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/auth" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
