import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // unique id generator
import Note from '../components/Note';

function TrashBin({
  deletedNotes, deleteTrashNote, restoreDeletedNote, emptyTrash,
}) {
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

  // calls empty trash function in App component
  function handleEmptyTrash() {
    emptyTrash();
  }

  return (
    <main className="trash">
      <section className="text-center">
        <h1 className="h-10 text-2xl text-gray-500">Trash bin</h1>
        <button
          className="bg-transparent hover:bg-slate-500 text-slate-500 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
          type="button"
          onClick={handleEmptyTrash}
        >
          Empty Trash
        </button>
      </section>
      <section className="flex flex-row flex-wrap justify-evenly pb-14">
        {deletedNotes.map(createNote)}
      </section>
    </main>
  );
}

export default TrashBin;
