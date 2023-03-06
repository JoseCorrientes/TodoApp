import React from "react";
import ErrorCreateFirstTodoCSS from "./ErrorCreateFirstTodo.module.css";

function ErrorCreateFirstTodo () {

    return(
    <div className={ErrorCreateFirstTodoCSS.ErrorCreateFirstTodoForm}>
        <p className={ErrorCreateFirstTodoCSS.ErrorText}>
        You must create your first Task...
        </p>
    </div>)
}

export {ErrorCreateFirstTodo};