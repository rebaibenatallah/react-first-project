import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pages from "./components/pages/Pages";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Testimonials from "./components/pages/Testimonials";
import Blog from "./components/pages/Blog";
import Counter from "./components/pages/Counter";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <Pages />
    </>
  );
}

export default App;
