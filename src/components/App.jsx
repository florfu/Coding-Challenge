import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // unique id generator
import Home from '../pages/Home';
import TrashBin from '../pages/TrashBin';
import Header from './Header';
import Footer from './Footer';

function App() {
  // App has global state of notes & deleted notes

  // handles notes state. Initializes from LocalStorage
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('noteStorage');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  // handles deletedNotes state. Initializes from LocalStorage.
  const [deletedNotes, setDeletedNotes] = useState(() => {
    const saved = localStorage.getItem('deletedNoteStorage');
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
  // & adds deleted notes to trash
  function deleteNote(id) {
    const deleteIndex = notes.findIndex((element) => element.id === id);// find index of deletednote
    const toTrash = [...deletedNotes, notes[deleteIndex]];
    setDeletedNotes(toTrash); // add the deleted note to deletedNotes
    localStorage.setItem('deletedNoteStorage', JSON.stringify(toTrash)); // store deletedNotes in LocalStorag

    // new array without the deleted note
    const newNotes = notes.filter((element, index) => index !== deleteIndex);
    setNotes(newNotes);
    localStorage.setItem('noteStorage', JSON.stringify(newNotes)); // update LocalStorage
  }

  // updateNote() modifies edited text (passed over from Note component) in notes array
  function updateNote(noteForm, id) {
    const editIndex = notes.findIndex((element) => element.id === id); // find index of edited note
    const newNotes = notes; // aux array of notes
    newNotes[editIndex] = noteForm;
    setNotes(newNotes);
    localStorage.setItem('noteStorage', JSON.stringify(newNotes));
  }

  // aux function for restoring notes. Handles appending notes to noteStorage
  function appendToStorage(name, data) {
    // get noteStorage current Value
    let currentValue = localStorage.getItem(name);
    if (currentValue === null) currentValue = {};
    // turn current Value to an array
    const newNotes = (JSON.parse(currentValue));
    // add the restored note to the array
    newNotes.push(data);
    // update noteStorage with currentValue + restored note
    localStorage.setItem(name, JSON.stringify(newNotes));
  }

  // Restore notes
  function restoreDeletedNote(id) {
    // find index of restored note
    const restoredIndex = deletedNotes.findIndex((element) => element.id === id);
    const restoredNote = deletedNotes[restoredIndex]; // object
    const newNotes = [...notes, restoredNote];
    setNotes(newNotes);
    // add trashNote to noteStorage. So notes in Home retrieves it.
    appendToStorage('noteStorage', restoredNote);
    // TODO: Ver si puedo usar la funcion deleteTrashNote
    // delete restoredNote from trashNote
    const newDeletedNotes = deletedNotes.filter((element, index) => index !== restoredIndex);
    setDeletedNotes(newDeletedNotes);
    // update deletedNoteStorage
    localStorage.setItem('deletedNoteStorage', JSON.stringify(newDeletedNotes));
  }
  // deletes permanently notes in trash
  function deleteTrashNote(id) {
    // find index of deleted note
    const deleteIndex = deletedNotes.findIndex((element) => element.id === id);
    // new array without the deleted note
    const newNotes = deletedNotes.filter((element, index) => index !== deleteIndex);
    setDeletedNotes(newNotes);
    localStorage.setItem('deletedNoteStorage', JSON.stringify(newNotes)); // update LocalStorage
  }

  return (

    <Router>
      <div className="relative h-full min-h-full">
        <Header isTrashFull={deletedNotes.length > 0} />
        <Routes>
          <Route exact path="/" element={<Home notes={notes} addNote={addNote} deleteNote={deleteNote} updateNote={updateNote} />} />
          <Route path="/trashbin" element={<TrashBin deletedNotes={deletedNotes} deleteTrashNote={deleteTrashNote} restoreDeletedNote={restoreDeletedNote} />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
