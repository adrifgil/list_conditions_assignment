import React from 'react'

const char = (props) => {

    const styleChar = {
        display: 'inline-block',
        padding: '16px',
        margin: '16',
        border: '1px solid black',
        textAlign: 'center'
    }
    return (
        <div style={styleChar} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;