import React from 'react';

const person = ({name, age, changed, children}) => {
    return (
        <div>
            <p>I am {name} and i am {age} years old !</p>
            <p>{children}</p>
            <input type="text" onChange={changed} value={name} />
        </div>
    );
}

export default person;