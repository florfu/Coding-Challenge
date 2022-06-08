import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // unique id generator
import Note from '../components/Note';

function TrashBin({ deletedNotes, deleteTrashNote, restoreDeletedNote }) {
  // gets deleted note id from note component
  // and passes it over to App component where deleted notes state is stored
  function handleDeleteInTrash(id) {
    deleteTrashNote(id);
  }

  // gets restored note id from note component
  // and passes it over to App component where notes state is stored
  function handleRestore(id) {
    restoreDeletedNote(id);
  }

  // sets props for note components
  function createNote(note) {
    return (
      <Note
        key={uuidv4()} // generates unique key
        id={note.id}
        title={note.title}
        content={note.content}
        handleDeleteInParent={handleDeleteInTrash}
        handleRestoreInParent={handleRestore}
        trashScreen // makes read only notes
      />
    );
  }

  return (
    <main className="trash pt-5">
      <section><h1 className="w-full text-center h-10 text-2xl text-gray-500">Trash bin</h1></section>
      <section className="flex flex-row flex-wrap justify-evenly pb-14">
        {deletedNotes.map(createNote)}
      </section>
    </main>
  );
}

export default TrashBin;
