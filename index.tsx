// Index.tsx its an app to track your To-do List and never miss a thing.
import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // for Rendering Purposes

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoInput, setTodoInput] = useState(''); // Use state is where users input using their keyboard 
  // to add a todo they type their task

  // this creates is to click add todo when the user types a task.
  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput.trim()]);
      setTodoInput('');
    }
  };

  // this class creates the remove button for individual tasks.
  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // this class creates button clears all the tasks that are on the list.
  const clearTodos = () => {
    setTodos([]);
  };

  // This is the web page creation where you would see the headings and buttons.
  return (
    <div>
      <h1>To-do List</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Enter a todo"
      /> 
      <button onClick={addTodo}>Add To-do</button> 
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearTodos}>Clear All</button>
    </div>
  );
};
// This is to render it.
ReactDOM.render(<TodoApp />, document.getElementById('root'));

