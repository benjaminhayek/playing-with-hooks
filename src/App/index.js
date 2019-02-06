import React, { useState } from 'react';
import Form from '../Form';
import Todo from '../Todo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = text => { 
    const newTodos = [...todos, { text }]; 
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Hooks</h1>
      <Form addTodo={addTodo}/>
      <Todo
        key={index}
        index={index}
        deleteTodo={deleteTodo}
        text={todo.text}
      />
    </div>
  );
}

export default App;
