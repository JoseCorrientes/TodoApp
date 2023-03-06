import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import TodoListContainerCSS from "./TodoList.module.css";

function TodoList(props) {
  const { lista, deleteTodo, completeTodo } = props;

  return (
    <div className={TodoListContainerCSS.TodoListContainer}>
      {lista.map((item) => (
        <TodoItem
          key={item.text}
          text={item.text}
          completed={item.completed}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
}

export { TodoList };
