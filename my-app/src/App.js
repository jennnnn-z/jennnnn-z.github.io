// import logo from './logo.svg';
import './App.css';
// import homebutton from './components/homebutton'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
       <Router>
            <Navbar />
            <homebutton />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
