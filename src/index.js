import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './componenets/App';
import Navbar from './componenets/Nav';
import Router from './Router';
import About from './componenets/About';
import Skills from './componenets/Skills';
import Contact from './componenets/Contact';
import Education from './componenets/Education';
import Footer from './componenets/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Router />
    <About/>
    <Skills/>
    <Contact/>
    <Education/>
    <Footer/>
  </React.StrictMode>
);
reportWebVitals();
