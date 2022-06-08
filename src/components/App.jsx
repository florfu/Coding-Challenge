import React, { useState } from 'react';
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
  // state for conditional rendering
  const [trashIsFull, setTrashIsFull] = useState(false);

  // check if deleteNoteStorage is empty
  function toggleTrashIcon(array) {
    setTrashIsFull(() => {
      if (array.length === 0) {
        return false;
      }
      return true;
    });
  }

  return (

    <Router>
      <div className="relative h-full min-h-full">
        <Header isTrashFull={trashIsFull} />
        <Routes>
          <Route exact path="/" element={<Home toggleTrashIcon={toggleTrashIcon} />} />
          <Route path="/trashbin" element={<TrashBin toggleTrashIcon={toggleTrashIcon} />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
