import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
