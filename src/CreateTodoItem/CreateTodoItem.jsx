import React from "react";
import CreateTodoItemCSS from "./CreateTodoItem.module.css";
import CreateTodo from "../images/CreateTodo.png";
import ImagenLateral from "../images/ImagenLateral.jpg";

function CreateTodoItem({ setOpenModal }) {
  return (
    <div>
      <h1 className={CreateTodoItemCSS.Title}>Create New Task</h1>
      <img
        className={CreateTodoItemCSS.CreateTodoButton}
        src={CreateTodo}
        // onClick={()=>setOpenModal(!openModal)}
        onClick={() => setOpenModal((prevState) => !prevState)}
        alt="Crear Nuevo Todo"
      />
      <img
        className={CreateTodoItemCSS.ImagenLateral}
        src={ImagenLateral}
        alt="Boy with his laptop"
      />
    </div>
  );
}

export { CreateTodoItem };
