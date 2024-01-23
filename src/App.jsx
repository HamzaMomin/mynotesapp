import React from 'react';
import './App.css'
import Login from './Screen/Login';
import ForgotPassword from './Screen/ForgotPass';
import SignUp from './Screen/Signup';
import HomeScreen from './NoteScreen/HomeScreen';
import NoteList from './NoteScreen/Note-List';


function App() {


  return (

    <div className="container">
      
      <NoteList />

    </div>

  )
}

export default App
