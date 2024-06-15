import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import SignUpPage from "../pages/signup page/SignUpPage";
import MenuPage from "../pages/menupage/MenuPage";
import CartPage from "../pages/cartpage/CartPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<h1>NO PAGE FOUND</h1>} />
    </Routes>
  );
}

export default AllRoutes;
