import React from 'react';
import './App.css';

const CharComponent = (props) => {
    return (
        <div className="char-component" onClick={props.charClick}>
            {props.letter}
        </div>
    );
}

export default CharComponent;