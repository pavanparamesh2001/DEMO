import React from 'react';

function States({ name,language }) {
  return (
    <div>
      <h1>{name}</h1>
      <h4>{language}</h4>
    </div>
  );
}

export default States;