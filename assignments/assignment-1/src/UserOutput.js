import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>
                The paragraph content belongs to {props.userName}
            </p>
        </div>
    )
}

export default UserOutput;