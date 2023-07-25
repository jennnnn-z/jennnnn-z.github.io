import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header'
import Footer from "./components/footer";
import MainContent from "./components/maincontent";

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route exact path='/' component={Header} />
          <Route path="/maincontent" component={MainContent} />
          <Route path="/footer" component={Footer} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;