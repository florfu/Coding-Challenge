import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // unique id generator
import Note from '../components/Note';
import CreateArea from '../components/CreateArea';

function Home({
  notes, addNote, deleteNote, updateNote,
}) {
  function handleAddInHome(input) {
    addNote(input);
  }

  function handleDeleteInHome(id) {
    deleteNote(id);
  }

  function handleUpdateInHome(noteForm, id) {
    updateNote(noteForm, id);
  }

  function createNote(note) {
    return (
      <Note
        key={uuidv4()}
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
