import React, { useReducer, useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const initialState = {
    todos: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "Add":
        return {
          ...state,
          todos: [...state.todos, { id: Date.now(), text: action.payload }],
        };
      case "Edit":
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, text: action.payload.text }
              : todo
          ),
        };
      case "Delete":
        return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload)
        };
      default:
        return state;
    }
  }

  function handleAdd() {
    dispatch({ type: "Add", payload: input });
    setInput("");
  }
  function handleEdit() {
    dispatch({ type: "Edit", payload: { id: editId, text: input } });
    setInput("");
    setEditId(null);
  }
  function handleDelete(id) {
    dispatch({ type: "Delete", payload: id});
  }
  return (
    <React.Fragment>
      <h2>Todo App using useReducer</h2>
      <input
        type="text"
        placeholder="add todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul>
        {state.todos.map((t) => (
          <li key={t.id}>
            {t.text}
            <button
              onClick={() => {
                setInput(t.text);
                setEditId(t.id);
              }}
            >
              Edit
            </button>
             <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={editId ? handleEdit : handleAdd}>
        {editId ? "Update" : "Add"}
      </button>
     
    </React.Fragment>
  );
};

export default Todo;
