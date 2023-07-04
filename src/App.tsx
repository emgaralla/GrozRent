import "./App.css";
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Annoucment from "./components/Announcement/Annoucment";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import AddProduct from "./components/AddProduct/AddProduct";
import { useSelector } from "react-redux";
import AboutUs from "./components/Footer/About Us/AboutUs";
import Conditionss from "./components/Footer/Conditions/Conditionss";
import Confidentiality from "./components/Footer/Confidentiality/Confidentiality";
import ContentOnCat from "./components/Categories/ContentOnCat";
import Otzivs from "./components/Footer/Otzivs/Otzivs";
import Settings from "./components/Settings";
import OneProduct from "./components/OneProduct/OneProduct";
import MyAd from "./components/MyAd";
import EditingMyAd from "./components/MyAd/EditingMyAd";

function App() {
  const location = useLocation();
  const token = useSelector((state) => state.application.token);
    
  

  return (
    <div className="back">
      {location.pathname === "/" && <Header />}
      {location.pathname === "/my-ad" && <Header />}
      {location.pathname === "/settings" && <Header />}
      {location.pathname === "/login" && <Header />}
      {location.pathname === "/auth" && <Header />}
      {location.pathname === "/" && <Categories />}
      {location.pathname === "/" && <Products />}
      {location.pathname === "/" && <Footer />}
      <Routes>
        <Route path="/:id" element={<OneProduct />} />
        {token ? (
          <>
            <Route path="/annoucment" element={<Annoucment />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/my-ad" element={<MyAd />} />
            <Route path="/login" element={<Navigate to={"/"} />} />
            <Route
              path="/my-ad/:id"
              element={
                <>
                  <Header /> <EditingMyAd />
                </>
              }
            />
          </>
        ) : (
          <>
            <Route path="/annoucment" element={<Navigate to={"/login"} />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/my-ad/:id" element={<Navigate to={"/"} />} />
          </>
        )}
        <Route path="/confidentiality" element={<Confidentiality />} />
        <Route path="/conditions" element={<Conditionss />} />
        <Route path="/otzivs" element={<Otzivs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/category/:id" element={<ContentOnCat />}/>
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
