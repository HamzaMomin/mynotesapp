import React, { useState } from 'react';
import './App.css'
import Login from './Screen/Login';
import ForgotPassword from './Screen/ForgotPass';
import SignUp from './Screen/Signup';
import HomeScreen from './NoteScreen/HomeScreen';
import NoteList from './NoteScreen/Note-List';


function App() {

  const [notes, setNotes] = [] = useState([
    {

      text: "",
      date: ""

    }



  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  };

  
  return (

    <div className="container">

      <NoteList notes={notes} handleAddNote={addNote}/>

    </div>

  )
}

export default App
