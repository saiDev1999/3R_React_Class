import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/home-screen";
import AboutScreen from "../screens/about-screen";
import ContactScreen from "../screens/contact-screen";
import SettingScreen from "../screens/setting-screen";
import InvalidScreen from "../screens/invalid-screen";
import ProductDetailComponent from "../components/products/productDetails";

export const UserInfo = createContext();

function NavigationStack() {
  const [username, setUsername] = useState("ram");
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <UserInfo.Provider
      value={{
        name: username,
        salary: 2000,
        count: count,
        increaseCount: increaseCount,
      }}
    >
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
    </UserInfo.Provider>
  );
}

export default NavigationStack;
