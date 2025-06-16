import React, { useState } from "react";
import Home from "../home/Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Blog from "./Blog";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "../common/Header";

const Pages = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/services" Component={Services} />
          <Route exact path="/portfolio" Component={Portfolio} />
          <Route exact path="/testimonials" Component={Testimonials} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/blog" Component={Blog} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
