import { Plus } from "lucide-react";
import "../todoApp.css";

const TodoInput = (props) => {
  // Destructure the props for easier access
  const { newTodo, handleKeyPress, setNewTodo, addTodo } = props;

  return (
    <div className="todo-input-container">
      {/* Input field for typing new todo text */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Add a new task..."
        className="todo-input"
      />
      {/* Button to add the new todo */}
      <button onClick={addTodo} className="add-button">
        <Plus size={18} className="icon" /> Add
      </button>
    </div>
  );
};

export default TodoInput;
