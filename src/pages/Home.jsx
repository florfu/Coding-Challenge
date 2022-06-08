import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // unique id generator
import Note from '../components/Note';
import CreateArea from '../components/CreateArea';

function Home({
  notes, addNote, deleteNote, updateNote,
}) {
  // gets input from CreateArea component
  // passes it over to App component, where notes state is stored.
  function handleAddInHome(input) {
    addNote(input);
  }

  // gets deleted note id from note component
  // and passes it over to App component where deleted notes state is stored
  function handleDeleteInHome(id) {
    deleteNote(id);
  }

  // gets note's new content from note component, and passes it over to App component
  function handleUpdateInHome(noteForm, id) {
    updateNote(noteForm, id);
  }

  // sets props for note components
  function createNote(note) {
    return (
      <Note
        key={uuidv4()} // creates unique key
        id={note.id}
        title={note.title}
        content={note.content}
        handleDeleteInParent={handleDeleteInHome}
        handleUpdateInParent={handleUpdateInHome}
        trashScreen={false}
      />
    );
  }

  return (
    <main className="home">
      <section>
        <CreateArea handleAddInHome={handleAddInHome} />
      </section>
      <section className="flex flex-row flex-wrap justify-evenly pb-14">
        {notes.map(createNote)}
      </section>
    </main>
  );
}

export default Home;
