import {  Route, Routes } from "react-router-dom";
import Home from "../page1/Home";
import Product2 from "../ProductPage/Product2";

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/product" element={<Product2 />} />
    </Routes>
  )
}
