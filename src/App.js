import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Login from "./Component/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Component/Signup";
import Mission from "./Component/Mission";
import Company from "./Component/Company";
import Works from "./Component/Works";
import Product from "./Component/Product";
import Imagica from "./Component/Imagica";
import Pricing from "./Component/Pricing";
import Testimonials from "./Component/Testimonials";
import Projects from "./Component/Projects";
import Features from "./Component/Features";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="project" element={<Product />} />
        <Route path="works" element={<Works />} />
        <Route path="mission" element={<Mission />} />
        <Route path="company" element={<Company />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<Imagica />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Testimonials" element={<Testimonials />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Features" element={<Features />} />
      </Routes>
    </Router>
  );
};

export default App;
