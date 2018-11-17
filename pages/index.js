import React, { useState } from 'react';

export default () => {
  const [testing, updateTesting] = useState('Hello World');
  return (
    <h1
      onClick={() => {
        updateTesting('Good Night');
      }}
    >
      {testing}
    </h1>
  );
};
