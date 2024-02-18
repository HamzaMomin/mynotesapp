import React from "react";
import './HomeScreen.css';


const HomeScreen = ({text, date }) => {
    
    
    return (
        <div className="note">
         
            <span>{text}</span>
            <div className="note-footer" >
            <small>{date}</small>
            
            </div>
          
        </div>
        
    );
};

export default HomeScreen;