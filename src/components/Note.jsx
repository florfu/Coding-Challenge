import React, { useState } from 'react';

function Note({
  title, content, id, deleteNote, updateNote, restoreNote,
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
    <form className="note">
      <input
        id={id}
        name="title"
        onChange={handleEdit}
        onBlur={handleUpdate}
        value={noteForm.title}
      />
      <textarea
        id={id}
        name="content"
        onChange={handleEdit}
        onBlur={handleUpdate}
        value={noteForm.content}
      />
      <button type="button" onClick={handleRestore}>RESTORE</button>
      <button type="button" onClick={handleDelete}>DELETE</button>
    </form>
  );
}

export default Note;
