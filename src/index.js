import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from "./Home";
import Services from './Services';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


