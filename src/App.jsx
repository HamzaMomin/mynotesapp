import React, { useEffect, useState } from 'react';
import './App.css'

import NoteList from './NoteScreen/Note-List';
import Search from './NoteScreen/Components/Search';
function App() {

  const [notes, setNotes] = [] = useState([
    



  ]);

  useEffect(()=>{

    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    if(savedNotes){
      setNotes(savedNotes)
    }

  }, [])

  useEffect(()=>{
      localStorage.setItem('react-notes-app-data' , JSON.stringify(notes))
  }, [notes])

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
        <h1>My Notes</h1>
         {/* <Header handleDarkMode={setDarkMode} />*/}
        <Search handleSearchNote={setSearchText} />

        <NoteList notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
          handleAddNote={addNote} />

      </div>

   // </div>


  )
}

export default App
