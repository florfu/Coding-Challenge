import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

function Note({
  title, content, id, deleteNote, updateNote, restoreNote, trashScreen,
}) {
  // handles note edits state
  const [noteForm, setNoteForm] = useState({ title, content, id });

  // function that saves input changes
  function handleEdit(event) {
    const { name, value } = event.target;
    setNoteForm((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  // function that calls updateNote() from Home component
  function handleUpdate() {
    updateNote(noteForm, id);
  }

  // function that calls deleteNote() from Home component
  function handleDelete() {
    deleteNote(id);
  }

  // function that calls restoreNote() from Home component
  // Used for notes in trash bin
  function handleRestore() {
    restoreNote(id);
  }

  return (
    <div className="relative m-6 p-4 w-60 block bg-white border-gray-200 rounded-lg border shadow-md sm:p-6 lg:p-8">
      { trashScreen
        ? (
          <button
            type="button"
            className="absolute top-2 left-2 mb-3 text-xs bg-transparent hover:bg-slate-600 text-slate-600 font-semibold hover:text-white py-1 px-2 border border-slate-600 hover:border-transparent rounded"
            onClick={handleRestore}
          >
            RESTORE
          </button>
        )
        : null}
      <input
        className="mt-6 w-full text-lg resize-none"
        id={id}
        name="title"
        onChange={handleEdit}
        onBlur={handleUpdate}
        value={noteForm.title}
        disabled={trashScreen}
      />
      <textarea
        className="textarea text-sm w-full resize-none h-24"
        id={id}
        name="content"
        onChange={handleEdit}
        onBlur={handleUpdate}
        value={noteForm.content}
        disabled={trashScreen}
      />
      <button type="button" className="absolute top-2 right-2" onClick={handleDelete}>
        <TiDeleteOutline color="#475569" size="1.5em" />
      </button>
    </div>
  );
}

export default Note;
