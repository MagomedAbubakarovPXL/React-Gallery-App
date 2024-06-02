import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ContactForm from "./components/Contact";
import Gallery from "./components/Gallery";

const App = () => (
    <Router>
      <NavigationBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
      <Footer />
    </Router>
);

export default App;
