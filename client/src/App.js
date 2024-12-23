import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Signup from './components/Signup';
import Login from './components/Login';
import BoxBreathing from './components/BoxBreathing'; // Import BoxBreathing

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/box-breathing" element={<BoxBreathing />} /> {/* Add BoxBreathing Route */}
      </Routes>
    </Layout>
  );
}

export default App;