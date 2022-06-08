import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

function Note({
  title, content, id, handleDeleteInParent, handleUpdateInParent,
  handleRestoreInParent, trashScreen,
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
    handleUpdateInParent(noteForm, id);
  }

  // function that calls deleteNote() from Home component
  function handleDelete() {
    handleDeleteInParent(id);
  }

  // // function that calls restoreNote() from Home component
  // // Used for notes in trash bin
  function handleRestore() {
    handleRestoreInParent(id);
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
            Restore
          </button>
        )
        : null}
      <input
        className="mt-4 w-full text-lg resize-none"
        id={id}
        name="title"
        onChange={handleEdit}
        onBlur={handleUpdate}
        value={noteForm.title}
        disabled={trashScreen}
        maxLength="18"
      />
      <textarea
        className="textarea text-sm w-full resize-none h-24"
        id={id}
        name="content"
        onChange={handleEdit}
        onBlur={handleUpdate}
        value={noteForm.content}
        disabled={trashScreen}
        maxLength="120"
      />
      <button type="button" className="absolute top-2 right-2" onClick={handleDelete}>
        <TiDeleteOutline color="#475569" size="1.5em" />
      </button>
    </div>
  );
}

export default Note;
