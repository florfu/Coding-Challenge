import React, { useState } from 'react';

function CreateArea({ handleAddInHome }) {
  // stores input (title & content)
  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  // character limit for characters counter
  const characterLimit = 120;

  // handles input state (title & content)
  function handleInput(event) {
    const { name, value } = event.target;
    setInput((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  // when add button is clicked, this function passes over the input to Home component
  function handleAddBtn(event) {
    handleAddInHome(input);
    // clears input
    setInput({
      title: '',
      content: '',
    });
    // prevents page refresh after submit
    event.preventDefault();
  }

  // Expansion effect of Create Note area
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="noteContainer mx-auto p-4 max-w-sm block bg-teal-custom border-gray-200 rounded-lg border shadow-lg sm:p-6 lg:p-8">
      <form className="space-y-6 max-w">
        {/* title input only shows up when isExpanded is true */}
        { isExpanded && (
        <input
          className="w-full p-2.5 rounded-md"
          name="title"
          placeholder="Title"
          value={input.title}
          onChange={handleInput}
          maxLength={18}
        />
        )}
        <textarea
          className="w-full p-2.5 rounded-md"
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1} // textarea expands when it's clicked
          value={input.content}
          onChange={handleInput}
          onClick={expand}
          maxLength={120}
        />
        { isExpanded ? (
          <small className="block text-white text-right text-top mt-2">
            {characterLimit - input.content.length}
            / 120
          </small>
        ) : null}
        {/* Add button only shows up when isExpanded is true */}
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
