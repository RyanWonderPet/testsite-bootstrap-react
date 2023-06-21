import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing"
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs"
import Team from './pages/Team';
import MyTestimonials from './pages/Testimonials'
import MyBreadCrumb from './components/Breadcrumb/MyBreadCrumb'


import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";
import MyFooter from "./components/Footer/Myfooter";
import MyFooter2 from"./components/Footer/MyFooter2";
import BlogSingle from "./components/Blog/BlogSingle";






import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/BlogSingle" element={<BlogSingle />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/MyTestimonials" element={<MyTestimonials />} />
          <Route path="/MyBreadCrumb" element={<MyBreadCrumb />} />
        </Routes>
      </div>
      <MyFooter />
      <MyFooter2 />
    </Router>
    
  );
}



export default App;
