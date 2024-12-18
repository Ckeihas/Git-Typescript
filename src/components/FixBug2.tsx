import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState(['Learn React', 'Build a project']);
    
    const addTodo = (todo: string) => {
      //todos.push(todo);
      setTodos((prev) => [...prev, todo]);
    };
  
    return (
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <button onClick={() => addTodo('New Task')}>Add Task</button>
      </div>
    );
  }
  
  export default TodoList;