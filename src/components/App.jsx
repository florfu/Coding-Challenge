import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import TrashBin from '../pages/TrashBin';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/trashbin" element={<TrashBin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
