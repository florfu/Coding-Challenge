import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
//notesContent.js is an auxiliar file created to test mapping of note components
import notes from "../notesContent"

function App() {
    return (
        <main>
            <Header />
            {
                //displaying an imported array of notes
                notes.map(note => 
                    {
                        return (<Note 
                            key={note.key}
                            title={note.title}
                            content={note.content}
                        />);
                    }
                )
            }   
            <Footer />
        </main>
    );
}

export default App;