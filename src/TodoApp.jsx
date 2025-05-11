import { useState } from "react";
import { Trash, CheckSquare, Square, Plus } from "lucide-react";
import "./todoApp.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Style with CSS", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">My Todo List</h1>

      {/* Input section */}
      <TodoInput
        newTodo={newTodo}
        handleKeyPress={handleKeyPress}
        setNewTodo={handleKeyPress}
        addTodo={handleKeyPress}
      />

      {/* Todo list */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

      {/* Summary */}
      <div className="todo-summary">
        {todos.filter((todo) => todo.completed).length} completed / {todos.length} total
      </div>
    </div>
  );
}
