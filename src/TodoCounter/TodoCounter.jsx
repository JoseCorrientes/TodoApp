import React, { Fragment } from "react";
import TodoCounterCSS from "./TodoCounter.module.css";

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <Fragment>
      <h1 className={TodoCounterCSS.Titulo}>
        Completed {completedTodos} of {totalTodos}
      </h1>
    </Fragment>
  );
}

export { TodoCounter };
