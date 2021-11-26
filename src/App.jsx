import React from 'react'; 
import { Route, Routes } from 'react-router';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Home from './Home';
import Error from './Erroe';
import Navbar from './Navbar';
import './index.css';
import Footer from './Footer';
 const App = () => {
     return (
     <>
     <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/service" element={<Services />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="*" element={<Error />} />
     </Routes>
     <Footer />
     </>
     );
 }

export default App;