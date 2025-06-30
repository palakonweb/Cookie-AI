import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import Generate from './pages/Generate';

const App : React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/generate" element={<Generate />} />
      </Routes>
    </Router>
  );
};

export default App;
