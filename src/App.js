import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from '../src/Components/Pages/Home';
import Contact from '../src/Components/Pages/Contact';
import About from '../src/Components/Pages/About';
import Blog from '../src/Components/Pages/Blog';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
    </div>
  );
}

export default App;
