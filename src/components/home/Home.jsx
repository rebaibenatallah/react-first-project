import React from "react";
import Hero from "./Hero";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Testimonials from "../pages/Testimonials";
import Blog from "../pages/Blog";
import Counter from "../pages/Counter";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}

export default Home;
