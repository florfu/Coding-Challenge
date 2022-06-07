import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // unique id generator
import Note from '../components/Note';
import CreateArea from '../components/CreateArea';

function Home({ toggleTrashIcon }) {
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

  // check conditional rendering of trash icon
  toggleTrashIcon(deletedNotes);

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
      <CreateArea addNote={addNote} />
      {notes.map(createNote)}
    </main>
  );
}

export default Home;
