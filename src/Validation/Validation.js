import React from 'react';
// import './Validation.css';

const validation = (props) => {
    return (
      <div>
        {
          props.inputLenght > 5 ?
            <p>Text Long Enough!</p> :
            <p>Text too Short!</p>
        }
      </div>  
    );
};

export default validation;

