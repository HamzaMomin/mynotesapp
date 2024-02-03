import React from "react";
import './HomeScreen.css';
import HomeScreen from "./HomeScreen";

const NoteList = ({ notes }) => {

    return (

        <div className="note-list">
            {notes.map((note) => <HomeScreen text={note.text} />)}
            

        </div>

    )

}
export default NoteList;
