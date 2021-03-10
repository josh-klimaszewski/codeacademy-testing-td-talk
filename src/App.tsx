import React, { useReducer, useState } from "react";
import "./App.css";
import { initialState, reducer } from "./reducer";
import { Item } from "./types";

function App() {
  const [{ todos }, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "add", data: input });
    setInput("");
  };

  const editTodo = (item: Item) => {
    const description = prompt("Edit this") ?? item.description;
    dispatch({ type: "edit", data: { ...item, description } });
  };

  return (
    <div className="App">
      <div style={{ margin: "40px" }}>
        <form onSubmit={addTodo}>
          <label>
            To do:
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ marginLeft: "16px", marginRight: "16px" }}
            />
          </label>
          <input type="submit" value="Add item" />
        </form>
      </div>
      {todos.map((item) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "40px",
            paddingLeft: "80px",
            paddingRight: "80px",
            border: "1px solid black",
          }}
        >
          <p>{item.description}</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button onClick={() => editTodo(item)}>edit</button>
            <button
              onClick={() => dispatch({ type: "delete", data: item.id })}
              style={{ marginLeft: "16px" }}
            >
              delete
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => dispatch({ type: "default" })}>Start over</button>
    </div>
  );
}

export default App;
