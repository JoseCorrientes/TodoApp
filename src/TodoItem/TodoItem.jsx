import React from "react";
import TodoItemCSS from "./TodoItem.module.css";
import Check from "../images/check.jpg";
import UnCheck from "../images/uncheck.jpg";
import TrashBucket from "../images/TrashBucketTransparente.png";

function TodoItem({ text, completed, deleteTodo, completeTodo }) {
  return (
    <div className={TodoItemCSS.TodoContainer}>
      <img
        className={TodoItemCSS.Check}
        src={completed ? Check : UnCheck}
        onClick={() => completeTodo(text)}
        alt="Estado del Check"
      />

      <h1
        className={`${
          (!completed && TodoItemCSS.Titulo) ||
          (completed && TodoItemCSS.TituloTachado)
        }`}
      >
        {text}
      </h1>

      <img
        className={TodoItemCSS.TrashBucket}
        src={TrashBucket}
        onClick={() => deleteTodo(text)}
        alt="Click to Delete"
      />
    </div>
  );
}

export { TodoItem };
