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

  // conditional rendering of Create Note area
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form>
        { isExpanded && (
        <input
          name="title"
          placeholder="Title"
          value={input.title}
          onChange={handleInput}
        />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={input.content}
          onChange={handleInput}
          onClick={expand}
        />
        {/* add button, when clicked, calls addNote function from App component */}
        { isExpanded ? (
          <button onClick={handleAddBtn} type="button">
            Add
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
