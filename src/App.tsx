import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LandingPageView from './pages/LandingPageView';
import LandingPageWhatsApp from './pages/LandingPageWhatsApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/lp-view" element={<LandingPageView />} />
        <Route path="/lp-wpp" element={<LandingPageWhatsApp />} />
      </Routes>
    </Router>
  );
}

export default App;