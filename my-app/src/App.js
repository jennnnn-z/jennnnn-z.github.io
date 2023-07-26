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
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
