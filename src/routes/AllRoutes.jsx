import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import SignUpPage from "../pages/signup page/SignUpPage";
import MenuPage from "../pages/menupage/MenuPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  );
}

export default AllRoutes;
