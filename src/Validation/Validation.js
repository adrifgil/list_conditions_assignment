import React from 'react';
// import './Validation.css';

const validation = (props) => {

   let validationMessage = (
    <div>
      <p>Text too long</p>
    </div>
   );

    if (props.inputLength <= 5) {
      validationMessage =  (
        <div>
          <p>Text too Short</p>
        </div>
       );
    }
    return (
      <div>
        {validationMessage}
      </div>
    );
};

export default validation;

