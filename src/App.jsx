import { createContext } from "react";
import "./assets/css/App.css";

import Header from "./components/header";
import MenuBar from "./components/menubar";
import NavBar from "./components/navbar";
import Navbar from "./components/navbar";
import { DataContext } from "./components/dataProvider";
import Upload_Page from "./components/upload";
import { MyCart } from "./components/mycart";
import { SignIn_SignOut } from "./components/sign-in_sign-out";
import { Offers } from "./components/offers";
import HoverCard from "./components/example";
import Content from "./components/content";

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
