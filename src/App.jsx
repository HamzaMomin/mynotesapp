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

      text: "Thsis is my first note",
      date: "12/1/2024"

    },
    {

      text: "Thsis is my second note",
      date: "13/1/2024"

    },
    {

      text: "Thsis is my third note",
      date: "30/1/2024"

    },



  ]);


  const addNote = (text) => {
    console.log(text);
  };


  return (

    <div className="container">

      <NoteList notes={notes} handleAddNote={addNote} />

    </div>

  )
}

export default App
