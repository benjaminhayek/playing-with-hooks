import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = text => { 
    const newTodos = [...todos, { text }]; 
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Hooks</h1>
    </div>
  );
}

export default App;
