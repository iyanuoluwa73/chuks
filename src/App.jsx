import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Onboard from "./pages/Onboard";
import Explore from "./pages/Explore";
import Details from "./pages/Details";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Onboard" element={<Onboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Details" element={<Details />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
