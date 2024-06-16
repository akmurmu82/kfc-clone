import "./App.css";
import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <Box w="100%">
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
