import React from 'react';

function Note({
  title, content, id, handleDelete,
}) {
  // function that calls deleteNote() from App component
  function handleClick() {
    handleDelete(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button type="button" onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
