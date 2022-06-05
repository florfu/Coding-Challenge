import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('noteStorage');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  // addNote() adds element (passed over from CreateArea component) to notes array
  function addNote(input) {
    const newNotes = [...notes, input];
    setNotes(newNotes);
    localStorage.setItem('noteStorage', JSON.stringify(newNotes));
  }

  // deleteNote() deletes element (passed over from Note component) from notes array
  function deleteNote(id) {
    const newNotes = notes.filter((element, index) => index !== id);
    setNotes(newNotes);
    localStorage.setItem('noteStorage', JSON.stringify(newNotes));
  }

  return (
    <main>
      <Header />
      <CreateArea addNote={addNote} />
      {
        // display array of notes
        notes.map((note, index) => (
          <Note
            key={uuidv4()}
            id={index}
            title={note.title}
            content={note.content}
            handleDelete={deleteNote}
          />
        ))
      }
      <Footer />
    </main>
  );
}

export default App;
