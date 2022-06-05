import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea";



function App() {
    let [notes, setNotes] = useState([]);

    //addNote() adds element (passed over from CreateArea component) to notes array
    function addNote(input) {
        setNotes((prevNotes)=>
           {return[...prevNotes, input]});
    }
    
    //deleteNote() deletes element (passed over from Note component) from notes array
    function deleteNote(id) {
        setNotes(prevNotes=>
            {return prevNotes.filter((noteItem,index) => 
                {return index !== id})}
        );
    }

    return (
        <main>
            <Header />
            <CreateArea addNote={addNote}/>
                {
                   //display array of notes
                    notes.map((note, index) => 
                        {
                            return (<Note 
                                //TODO: add key package
                                key={index}
                                id={index}
                                title={note.title}
                                content={note.content}
                                delete={deleteNote}
                            />);
                        }
                     )
                }
                
            <Footer />
        </main>
    );
}

export default App;