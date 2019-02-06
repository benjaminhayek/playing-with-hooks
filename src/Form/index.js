import React, { useState } from 'react';

const Form = () => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

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