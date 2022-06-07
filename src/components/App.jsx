import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // unique id generator
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  // notes state initializes from LocalStorage
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('noteStorage');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  // addNote() adds element (passed over from CreateArea component) to notes array
  function addNote(input) {
    // adding id to input passed over from CreateArea
    const note = {
      id: uuidv4(),
      ...input,
    };
    const newNotes = [...notes, note];
    setNotes(newNotes);
    localStorage.setItem('noteStorage', JSON.stringify(newNotes));
  }

  // deleteNote() deletes element (passed over from Note component) from notes array
  function deleteNote(id) {
    const deleteIndex = notes.findIndex((element) => element.id === id);// find index of deletednote
    const newNotes = notes.filter((element, index) => index !== deleteIndex);
    setNotes(newNotes);
    localStorage.setItem('noteStorage', JSON.stringify(newNotes));
  }

  // updateNote() modifies edited text (passed over from Note component) in notes array
  function updateNote(name, textContent, id) {
    const editIndex = notes.findIndex((element) => element.id === id); // find index of edited note
    const newNotes = notes; // aux array of notes

    // Editing the note in the array. [name] is the name of the element that triggered the event
    // (title or content) & textContent is the modified text.
    newNotes[editIndex] = { ...notes[editIndex], [name]: textContent };
    setNotes(newNotes);
    localStorage.setItem('noteStorage', JSON.stringify(newNotes));
  }

  function createNote(note) {
    return (
      <Note
        key={uuidv4()}
        id={note.id}
        title={note.title}
        content={note.content}
        deleteNote={deleteNote}
        updateNote={updateNote}
      />
    );
  }

  return (
    <main>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map(createNote)}
      <Footer />
    </main>
  );
}

export default App;
