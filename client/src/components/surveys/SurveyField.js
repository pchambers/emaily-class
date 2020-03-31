//Survey Field contains logic to render single label and text input
import React from 'react';

export default ({input, label, meta: {error, touched} }) => {
  return (
      <div>
        <label>{label}</label>
        <input {...input} sytl= {{ marginBottom: '5px'}}/>
        <div className="red-text" style={{marginBottom: '20px'}}>
          {touched && error}
        </div>
      </div>
  );
};
