import "./styles.css";
import { useState } from "react";
import Counter from "./components/Counter";
import PasswordMatch from "./components/PasswordMatch";
import AlphanumericPassword from "./components/AlphanumericPassword";
import CharacterCount from "./components/CharacterCounter";
import ButtonDisable from "./components/ButtonDisable";
import ShowPassword from "./components/ShowPassword";
import SmallFigma from "./components/SmallFigma";
import AddToCart from "./components/AddToCart";
import SwitchTabs from "./components/SwitchTabs";
import Toast from "./components/Toast";
import DarkMode from "./components/DarkMode";
import ListItems from "./components/ListItems";
export default function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <PasswordMatch /> */}
      {/* <AlphanumericPassword /> */}
      {/* <CharacterCount /> */}
      {/* <ButtonDisable /> */}
      {/* <ShowPassword /> */}
      {/* <SmallFigma /> */}
      <AddToCart />
      {/* <SwitchTabs /> */}
      {/* <Toast /> */}
      {/* <DarkMode /> */}
      {/* <ListItems /> */}
    </div>
  );
}
