import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateArea from "./CreateArea";



function App() {
    let [notes, setNotes] = useState([]);

    //addNote() adds note title & content (passed over from CreateArea component) to the notes array
    function addNote(input) {
        setNotes((prevNotes)=>
           {return[...prevNotes, input]});
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
                            />);
                        }
                     )
                }
                
            <Footer />
        </main>
    );
}

export default App;