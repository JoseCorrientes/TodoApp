import React, { useState } from "react";
import TodoFormCSS from "./TodoForm.module.css";

function TodoForm({ setOpenModal, addTodo }) {
  const [toSaveTodo, setToSaveTodo] = useState("");

  const changeToSaveTodo = (e) => {
    setToSaveTodo(e.target.value);
  };

  const cancelTodoForm = () => {
    console.log(" Cancel todo Form = true");
    setOpenModal(false);
    setToSaveTodo("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`vamos a submitear ${toSaveTodo}`);
    addTodo(toSaveTodo);
    setToSaveTodo("");
    setOpenModal(false);
  };

  return (
    <form className={TodoFormCSS.TodoFormContainer} onSubmit={onSubmit}>
      <p className={TodoFormCSS.TodoFormTitle}>Insert your Task</p>
      <input
        className={TodoFormCSS.TodoFormInput}
        placeholder="Todo Text..."
        autoFocus
        value={toSaveTodo}
        onChange={(e) => changeToSaveTodo(e)}
      ></input>
      <div>
        <button
          className={TodoFormCSS.TodoFormCancelButton}
          type="button"
          onClick={cancelTodoForm}
        >
          Cancel
        </button>
        <button
          className={TodoFormCSS.TodoFormOkButton}
          type="submit"
          // onClick={saveTodoForm}
        >
          Ok
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
