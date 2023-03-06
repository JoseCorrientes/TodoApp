import React from "react";
import HideCompleteButtonCSS from "./HideCompleteButton.module.css";

function HideCompleteButton({ hideCompletedTodo, toggleHideCompleteTodo }) {
  let word = hideCompletedTodo ? "View" : "Hide";

  return (
    <button
      className={HideCompleteButtonCSS.HideTaskButton}
      onClick={() => toggleHideCompleteTodo()}
    >
      {word} Completed TODOs
    </button>
  );
}
export { HideCompleteButton };
