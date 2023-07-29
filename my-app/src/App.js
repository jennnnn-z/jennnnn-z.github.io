import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/index";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";
import "./styles.css";
import GlobalStyles from './globalstyles'; 


const App = () => {
  return (
    <>
      <script src="http://localhost:8097"></script>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
