import { createContext } from "react";
import "./assets/css/App.css";

import Header from "./components/Navbar/header";
import MenuBar from "./components/Navbar/menubar";
import NavBar from "./components/Navbar/navbar";
import Navbar from "./components/Navbar/navbar";
import { DataContext } from "./components/Navbar/dataProvider";
import Upload_Page from "./components/Navbar/upload";
import { MyCart } from "./components/Navbar/mycart";
import { SignIn_SignOut } from "./components/Navbar/sign-in_sign-out";
import { Offers } from "./components/Navbar/offers";
import HoverCard from "./components/Navbar/example";
import Content from "./components/Navbar/content";

function App() {
  return (
    <>
      <Header />
      <MenuBar />
      <NavBar />
      <Content />
    </>
  );
}
export default App;
