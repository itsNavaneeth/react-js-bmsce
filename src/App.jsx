import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="dummy-container">
        <div className="top-container">
          <h3 className="title-text">Well hello there</h3>
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNndmZnB0NWpub3JqcDgwdGkxbTF5bzZzNnZ2eHMzcmdqNjdqdXJ1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiIzJSKB4l7xTouE8/giphy.gif"
            alt="well hello there gif"
            className="image-item"
          />
        </div>
        <div className="counter-container">
          <button className="counter-btn" onClick={() => setCounter(counter + 1)}>
            Click me?
          </button>
          <p>You have clicked </p>
          <p className="counter-text">{counter}</p>
          <p> times</p>
        </div>
      </div>
    </>
  );
}

export default App;
