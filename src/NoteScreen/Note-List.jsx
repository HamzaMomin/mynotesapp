import React from "react";
import './HomeScreen.css';
import HomeScreen from "./HomeScreen";
import AddNote from "./Components/Note";



const NoteList = ({ notes , handleAddNote , }) => {

    return (

        <div className="note-list">
            {
                notes.map(
                    (note) => (<HomeScreen text={note.text} date={note.date} />

                    ))}


            <AddNote handleAddNote={handleAddNote} />

        </div>

    )

};
export default NoteList;
