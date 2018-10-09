import React from 'react';

const ValidationComponent = (props) => {
    const textSize = props.textLength > 5 ? 'long enough' : 'too short';
    return (
        <p>Text is {textSize}</p>
    );
}

export default ValidationComponent;