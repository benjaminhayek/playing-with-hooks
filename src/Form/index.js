import React, { useState } from 'react';

const Form = () => {
    const [value, setValue] = useState('');

    return (
      <form>
        <input
          type='text'
          placeholder='Add a todo'
        />
      </form>
    );
  };

  export default Form;