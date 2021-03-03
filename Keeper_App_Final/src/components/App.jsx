import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {

    const [Notes, setNotes] = useState([]);

    function addNote(newInputNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newInputNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            {/* {notes.map(note => (<Note
                key={note.key}
                title={note.title}
                content={note.content}
            />))} */}
            <CreateArea onAdd={addNote} />
            <div>{Notes.map((note, index) => {
                return (<Note
                    id={index}
                    key={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />);
            }
            )}
            </div>

            <Footer />
        </div>
    );
}

export default App;