import "../Style.css";
import React from 'react';

function Styling()
{
    const [darkView, setDarkView] = React.useState(false);
    const classes = `gap center ${darkView ? "dark" : "light"}`;
    
    
    return (
        <div className={classes}>
            <h1>Silahkan ke klik tombol dibawah untuk ganti ke {darkView ? "Light Theme" : "Dark Theme"}</h1>
            <button 
                onClick={setDarkView.bind(this, darkView ? false : true)}
                className="btn"    
            >
                Klik aku!
            </button>
            <hr />
        </div>
    )
}

export default Styling;