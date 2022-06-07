import React from 'react';

function Note({
  title, content, id, deleteNote, updateNote,
}) {
  // function that calls deleteNote() from App component
  function handleDelete() {
    deleteNote(id);
  }

  // function that calls updateNote() from App component
  function handleEdit(event) {
    const { textContent } = event.target; // gets hold of the text that changed inside the tag
    const name = event.target.getAttribute('name'); // value = title or content
    // notes new values
    updateNote(name, textContent, id);
  }

  return (
    <div className="note">
      <h1
        contentEditable
        suppressContentEditableWarning
        id={id}
        name="title"
        onBlur={handleEdit}
      >
        {title}
      </h1>
      <p
        contentEditable
        suppressContentEditableWarning
        id={id}
        name="content"
        onBlur={handleEdit}
      >
        {content}
      </p>
      <button type="button" onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
