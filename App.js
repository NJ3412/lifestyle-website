import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TravelsPage from './TravelsPage'; // Corrected import path

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/travels" element={<TravelsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
