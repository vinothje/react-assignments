import React from 'react';
import './App.css';

const CharComponent = (props) => {
    return (
        <p className="char-component" onClick={console.log('test')}>
            {props.letter}
        </p>
    );
}

export default CharComponent;