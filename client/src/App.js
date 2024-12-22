import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Import Layout
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Signup from './components/Signup'; // Import Signup
import Login from './components/Login'; // Import Login

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signup" element={<Signup />} /> {/* Add Signup Route */}
        <Route path="/login" element={<Login />} /> {/* Add Login Route */}
      </Routes>
    </Layout>
  );
}

export default App;