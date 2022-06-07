import React, { useState } from 'react';

function CreateArea({ addNote }) {
  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  // handles input state (title & content)
  function handleInput(event) {
    const { name, value } = event.target;
    setInput((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleAddBtn(event) {
    addNote(input);
    setInput({
      title: '',
      content: '',
    });

    // prevents page refresh after submit
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleInput}
          name="title"
          placeholder="Title"
          value={input.title}
        />
        <textarea
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={input.content}
        />
        {/* add button, when clicked, calls addNote function from App component */}
        <button onClick={handleAddBtn} type="button">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
