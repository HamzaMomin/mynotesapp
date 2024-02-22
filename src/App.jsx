import React, { useState } from 'react';
import './App.css'
import Login from './Screen/Login';
import ForgotPassword from './Screen/ForgotPass';
import SignUp from './Screen/Signup';
import HomeScreen from './NoteScreen/HomeScreen';
import NoteList from './NoteScreen/Note-List';
import Search from './NoteScreen/Components/Search';
import Header from './NoteScreen/Components/Header';

function App() {

  const [notes, setNotes] = [] = useState([
    {

      text: "",
      date: ""

    }



  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

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
   // <div className={`${darkMode && 'dark-mode'}`}>

      <div className="container">

         {/* <Header handleDarkMode={setDarkMode} />*/}
        <Search handleSearchNote={setSearchText} />

        <NoteList notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
          handleAddNote={addNote} />

      </div>

   // </div>


  )
}

export default App
