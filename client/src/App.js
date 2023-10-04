import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Regsiter from './components/Auth/Regsiter.jsx';
import Navbar from './components/Layout/Navbar.jsx';
import Login from './components/Auth/Login.jsx';
import Footer from './components/Layout/Footer.jsx';
import ForgotPassword from './components/Auth/ForgotPassword.jsx';
import NotFound from './components/External/NotFound.jsx';
import Home from './components/Layout/Home.jsx';
import About from './components/External/About.jsx';
import Contact from './components/Contact/Contact.jsx';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Regsiter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
          <Route path="" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
