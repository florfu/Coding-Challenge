import React, { useState } from 'react';

function CreateArea({ handleAddInHome }) {
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
    handleAddInHome(input);
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
    <div className="noteContainer mx-auto mt-6 p-4 max-w-sm block bg-teal-custom border-gray-200 rounded-lg border shadow-lg sm:p-6 lg:p-8">
      <form className="space-y-6 max-w">
        { isExpanded && (
        <input
          className="w-full p-2.5 rounded-md"
          name="title"
          placeholder="Title"
          value={input.title}
          onChange={handleInput}
        />
        )}
        <textarea
          className="w-full p-2.5 rounded-md"
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={input.content}
          onChange={handleInput}
          onClick={expand}
        />
        {/* add button, when clicked, calls addNote function from App component */}
        { isExpanded ? (
          <button
            className="w-full text-white bg-grey-opacity hover:bg-slate-500 font-medium rounded-lg text-md px-5 py-2.5 text-center"
            onClick={handleAddBtn}
            type="button"
          >
            Add
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
