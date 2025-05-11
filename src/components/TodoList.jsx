import { CheckSquare, Square, Trash } from "lucide-react";
import React from "react";
import "../todoApp.css";

const TodoList = (props) => {
  const { todos, toggleTodo, deleteTodo } = props;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <div className="todo-content">
            <button onClick={() => toggleTodo(todo.id)} className="toggle-button">
              {todo.completed ? <CheckSquare size={20} /> : <Square size={20} />}
            </button>
            <span className="todo-text">{todo.text}</span>
          </div>
          <button onClick={() => deleteTodo(todo.id)} className="delete-button">
            <Trash size={18} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
