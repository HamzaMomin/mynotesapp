import React from "react";

const Header = ({ handleDarkMode }) => {

    return (
        <div className="header">
            <h1>My Notes</h1>
            <button onClick={() => handleDarkMode((peviousDarkMode) => !peviousDarkMode)} className="Save"> Toggle Mode</button>
        </div>
    )

}

export default Header;