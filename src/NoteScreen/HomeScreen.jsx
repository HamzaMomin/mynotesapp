import React from "react";
import './HomeScreen.css';


const HomeScreen = ({text, date}) => {
    
   
    return (
        <div className="note">
         
            <span>{text}</span>
            <div className="note-footer" >
            <small>{date}</small>
            <p>delete Icon</p>
            </div>
          
        </div>
        
    );
};

export default HomeScreen;