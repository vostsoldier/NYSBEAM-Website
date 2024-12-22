import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Import Layout
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Signup from './components/Signup'; // Import Signup

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signup" element={<Signup />} /> {/* Add Signup Route */}
      </Routes>
    </Layout>
  );
}

export default App;