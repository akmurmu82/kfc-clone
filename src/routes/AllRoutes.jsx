import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import SignUpPage from "../pages/signup page/SignUpPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default AllRoutes;
