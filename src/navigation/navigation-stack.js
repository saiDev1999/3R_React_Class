import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/home-screen";
import AboutScreen from "../screens/about-screen";
import ContactScreen from "../screens/contact-screen";
import SettingScreen from "../screens/setting-screen";
import InvalidScreen from "../screens/invalid-screen";
import ProductDetailComponent from "../components/products/productDetails";

function NavigationStack() {
  return (
    <BrowserRouter>
      <Routes>
        {/* static Routes */}
        <Route path="/" Component={HomeScreen} />
        <Route path="/about" Component={AboutScreen} />
        <Route path="/contact" Component={ContactScreen} />
        <Route path="/settings" Component={SettingScreen} />

        {/* Invalid Routes */}
        <Route path="*" Component={InvalidScreen} />
        {/* http://localhost:3000/category/productId */}
        {/* Dynamic Routes */}
        <Route
          path={":category/:productId"}
          Component={ProductDetailComponent}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default NavigationStack;
