import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  './App.css';
import Footer from './Components/Footer/Footer';
import NavbarCombine from "./Components/Navbar/NavbarCombine";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/page1/Home";
import Product2 from "./Components/ProductPage/Product2";


function App() {
  return (
    <div className="App">
    < NavbarCombine />
    <AllRoutes />
    {/* <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/product" element={<Product2 />} />
    </Routes> */}
     <Footer/>
    </div>
  );
}

export default App;
