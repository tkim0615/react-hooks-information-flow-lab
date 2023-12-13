import React from "react";



function Header({onDarkModeClick, onDarkMode}){      // onDarkModeClick is a callback function that is passed to the Header component from the App component. Triggering the onDarkModeClick function to run when button is clicked
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>  
          {onDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}
export default Header;