import React, { useState } from 'react';

function Note({
  title, content, id, deleteNote, updateNote,
}) {
  const [noteForm, setNoteForm] = useState({ title, content, id });

  // function that calls deleteNote() from App component
  function handleDelete() {
    deleteNote(id);
  }

  // function that calls updateNote() from App component
  function handleEdit(event) {
    const { name, value } = event.target;
    setNoteForm((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleUpdate() {
    updateNote(noteForm, id);
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
      <button type="button" onClick={handleDelete}>DELETE</button>
    </form>
  );
}

export default Note;
