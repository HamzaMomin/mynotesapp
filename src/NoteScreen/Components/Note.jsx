import React, { useState } from "react";
import './addNote.css';

const AddNote = ({handleAddNote}) =>{

    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length)
        setNoteText(event.target.value);
    };
		
    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('');
        }
        
    };


    return (
        <div className="note new">
            <textarea rows={'8'} cols={'10'}
            placeholder="Type to add a note....."
            value={noteText}
            onChange={handleChange}
            ></textarea>

            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="Save" onClick={handleSaveClick}>Save Note</button>
            </div>
        </div>

    )

};

export default AddNote;