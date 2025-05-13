import { useState } from "react";
import { Trash, CheckSquare, Square, Plus } from "lucide-react";
import "./todoApp.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function TodoApp() {
  // State for storing the list of todo items
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Style with CSS", completed: false }
  ]);

  // State for storing the current input value
  const [newTodo, setNewTodo] = useState("");

  /**
   * Adds a new todo item to the list
   *
   * How it works:
   * 1. First checks if the input is not empty
   * 2. Creates a new todo object with a unique ID, the input text, and completed set to false
   * 3. Adds this new todo to the existing list using the spread operator
   * 4. Clears the input field after adding
   */
  const addTodo = () => {
    // Don't add empty todos
    if (newTodo.trim() === "") return;

    // Create a new todo object
    const newTodoItem = {
      id: Date.now(), // Use current timestamp as a unique ID
      text: newTodo, // Use the text from input
      completed: false // New todos start as not completed
    };

    // Add the new todo to our list (creating a new array)
    setTodos([...todos, newTodoItem]);

    // Clear the input field
    setNewTodo("");
  };

  /**
   * Toggles the completed status of a todo item
   *
   * @param {number} id - The unique identifier of the todo to toggle
   *
   * How it works:
   * 1. We create a new array by mapping through all todos
   * 2. For each todo, we check if its ID matches the one we want to toggle
   * 3. If matched, we create a new todo object with the completed status reversed
   * 4. If not matched, we keep the todo as is
   * 5. Finally, we update the todos state with this new array
   */
  const toggleTodo = (id) => {
    // Create a new array by mapping through all todos
    const updatedTodos = todos.map((todo) => {
      // If this is the todo we want to toggle
      if (todo.id === id) {
        // Return a new todo object with completed status flipped
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      // Otherwise return the original todo unchanged
      return todo;
    });

    // Update the todos state with our new array
    setTodos(updatedTodos);
  };

  /**
   * Removes a todo item from the list
   *
   * @param {number} id - The unique identifier of the todo to delete
   *
   * How it works:
   * 1. We use the filter method to create a new array
   * 2. The filter keeps only todos that don't match the given id
   * 3. We update the todos state with this new filtered array
   */
  const deleteTodo = (id) => {
    // Create a new array containing all todos EXCEPT the one with matching id
    const remainingTodos = todos.filter((todo) => {
      // Keep this todo only if its id is different from the one we want to delete
      return todo.id !== id;
    });

    // Update the todos state with our filtered array
    setTodos(remainingTodos);
  };

  /**
   * Handles keyboard events in the input field
   *
   * @param {Event} e - The keyboard event object
   *
   * How it works:
   * 1. Checks if the key pressed was Enter
   * 2. If it was, calls the addTodo function to add the current input as a new todo
   */
  const handleKeyPress = (e) => {
    // Check if the Enter key was pressed
    if (e.key === "Enter") {
      // Add the current input as a new todo
      addTodo();
    }
  };

  /**
   * Helper function to count completed todos
   *
   * This function demonstrates how to use filter to count items that meet a condition
   *
   * @returns {number} The count of completed todos
   */
  const countCompletedTodos = () => {
    // Step 1: Create a filtered array containing only completed todos
    const completedTodos = todos.filter((todo) => {
      // Include only todos where completed is true
      return todo.completed === true;
    });

    // Step 2: Return the length of the filtered array
    return completedTodos.length;
  };

  return (
    <div className="todo-container">
      {/* App title */}
      <h1 className="todo-title">My Todo List</h1>

      {/* Input section - handles adding new todos */}
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} handleKeyPress={handleKeyPress} addTodo={addTodo} />

      {/* Todo list section - displays todos and handles toggle/delete */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

      {/* Summary section - shows completed vs total count */}
      <div className="todo-summary">
        {/* Using our helper function to count completed todos */}
        <span>{countCompletedTodos()}</span>
        <span>{" completed / "}</span>
        <span>{todos.length}</span>
        <span>{" total"}</span>
      </div>
    </div>
  );
}
