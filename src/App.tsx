import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import Header from "./components/Header/Header";
import Annoucment from "./components/Announcement/Annoucment";

function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <Routes>
        <Route path="/annoucment" element={<Annoucment />} />
      </Routes>

      {location.pathname !== "/annoucment" && <Header />}
      <Routes>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/auth" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
