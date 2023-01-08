import React from "react";
import Navs from "../Header/Navbar/Navs";
import HeroSection from "../Header/HeroSection";
import Footer from "./Footer";
import Todo from "./Todo";
export default function Contact() {
  return (
    <div>
      <Navs />
      <h1>Contact me Page: </h1>

      {/* Content gose here!  */}
      <Todo />

      <Footer />
    </div>
  );
}
