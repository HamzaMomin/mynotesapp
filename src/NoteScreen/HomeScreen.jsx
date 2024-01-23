import React from "react";
import './HomeScreen.css';


const HomeScreen = () => {
    
   
    return (
        <div className="note">
            <h3>My first Note</h3>
            <span>Hello this is my note</span>
            <div className="note-footer" >
            <small>1/22/2024</small>
            <p>delete Icon</p>
            </div>

        </div>
        
    );
};

export default HomeScreen;