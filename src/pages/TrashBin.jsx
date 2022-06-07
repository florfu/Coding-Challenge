import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // unique id generator
import Note from '../components/Note';

function TrashBin({ toggleTrashIcon }) {
  // handles trash notes state.
  // Initializes from deletedNoteStorage -> notes that were deleted in Home component
  const [trashNotes, setTrashNotes] = useState(() => {
    const saved = localStorage.getItem('deletedNoteStorage');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  // check conditional rendering of trash icon
  toggleTrashIcon(trashNotes);

  function deleteTrashNote(id) {
    // find index of deleted note
    const deleteIndex = trashNotes.findIndex((element) => element.id === id);
    // new array without the deleted note
    const newNotes = trashNotes.filter((element, index) => index !== deleteIndex);
    setTrashNotes(newNotes);
    localStorage.setItem('deletedNoteStorage', JSON.stringify(newNotes)); // update LocalStorage
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

  // Restore notes to home
  function restoreTrashNote(id) {
    // find index of restored note
    const restoredIndex = trashNotes.findIndex((element) => element.id === id);
    const restoredNote = trashNotes[restoredIndex]; // object
    // add trashNote to noteStorage. So notes in Home retrieves it.
    appendToStorage('noteStorage', restoredNote);
    // TODO: Ver si puedo usar la funcion deleteTrashNote
    // delete restoredNote from trashNote
    const newTrashNotes = trashNotes.filter((element, index) => index !== restoredIndex);
    setTrashNotes(newTrashNotes);
    // update deletedNoteStorage
    localStorage.setItem('deletedNoteStorage', JSON.stringify(newTrashNotes));
  }

  // TODO: MAKE READ ONLY
  function createNote(note) {
    return (
      <Note
        key={uuidv4()}
        id={note.id}
        title={note.title}
        content={note.content}
        deleteNote={deleteTrashNote}
        restoreNote={restoreTrashNote}
      />
    );
  }

  return (
    <main>
      {trashNotes.map(createNote)}
    </main>
  );
}

export default TrashBin;
