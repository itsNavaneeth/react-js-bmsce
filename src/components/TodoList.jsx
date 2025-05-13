import { CheckSquare, Square, Trash } from "lucide-react";
import React from "react";
import "../todoApp.css";

const TodoList = (props) => {
  // Destructure the props for easier access
  const { todos, toggleTodo, deleteTodo } = props;

  return (
    <ul className="todo-list">
      {/* Map through each todo item and render a list item */}
      {todos.map((todo) => (
        <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <div className="todo-content">
            {/* Toggle button with different icons based on completion status */}
            <button onClick={() => toggleTodo(todo.id)} className="toggle-button">
              {todo.completed ? <CheckSquare size={20} /> : <Square size={20} />}
            </button>
            {/* Todo text content */}
            <span className="todo-text">{todo.text}</span>
          </div>
          {/* Delete button */}
          <button onClick={() => deleteTodo(todo.id)} className="delete-button">
            <Trash size={18} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
