import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Events = lazy(() => import('./components/Events'));
const Signup = lazy(() => import('./components/Signup'));
const Login = lazy(() => import('./components/Login'));
const BoxBreathing = lazy(() => import('./components/BoxBreathing'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Donate = lazy(() => import('./components/Donate'));
const Videos = lazy(() => import('./components/Videos'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/box-breathing" element={<BoxBreathing />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;