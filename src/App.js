import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from '../src/Components/Pages/Home';
import Contact from '../src/Components/Pages/Contact';
import About from '../src/Components/Pages/About';
import Blog from '../src/Components/Pages/Blog';
import NavBar from './Components/NavBar';
import ErrorPage from './Components/Pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='*' element={<ErrorPage />}/> {/* This is for showing 404 error page not found*/}
      </Routes>
    </div>
  );
}

export default App;
