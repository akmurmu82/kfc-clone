import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default AllRoutes;
