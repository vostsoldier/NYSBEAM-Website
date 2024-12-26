import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Signup from './components/Signup';
import Login from './components/Login';
import BoxBreathing from './components/BoxBreathing'; // Import BoxBreathing
import Newsletter from './components/Newsletter';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/box-breathing" element={<BoxBreathing />} /> {/* Add BoxBreathing Route */}
        <Route path="/newsletter" element={<Newsletter />} /> {/* Add Newsletter Route */}
      </Routes>
    </Layout>
  );
}

export default App;