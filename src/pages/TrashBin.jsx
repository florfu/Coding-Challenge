import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // unique id generator
import Note from '../components/Note';

function TrashBin({ deletedNotes, deleteTrashNote, restoreDeletedNote }) {
  // handles trash notes state.
  // Initializes from deletedNoteStorage -> notes that were deleted in Home component
  // const [trashNotes, setTrashNotes] = useState(() => {
  //   const saved = localStorage.getItem('deletedNoteStorage');
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || [];
  // });

  // // check conditional rendering of trash icon
  // toggleTrashIcon(trashNotes);

  function handleDeleteInTrash(id) {
    deleteTrashNote(id);
  }

  function handleRestore(id) {
    restoreDeletedNote(id);
  }

  function createNote(note) {
    return (
      <Note
        key={uuidv4()}
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
