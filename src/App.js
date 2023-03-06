import React, { useState, useEffect } from "react";
import { TodoCounter } from "./TodoCounter/TodoCounter.jsx";
import { TodoList } from "./TodoList/TodoList.jsx";
import { TodoSearch } from "./TodoSearch/TodoSearch.jsx";
import { CreateTodoItem } from "./CreateTodoItem/CreateTodoItem.jsx";
import { HideCompleteButton } from "./HideCompeteButton/HideCompleteButton";

import { Modal } from "./Modal/Modal.jsx";
import { TodoForm } from "./TodoForm/TodoForm.jsx";
import { ModalError } from "./ModalError/ModalError.jsx";
import { ErrorCreateFirstTodo } from "./ErrorCreateFirstTodo/ErrorCreateFirstTodo.jsx";
import { ErrorLoading } from "./ErrorLoading/ErrorLoading.jsx";
import { ErrorError } from "./ErrorError/ErrorError.jsx";
import { SkeletonLoader } from "./SkeletonLoader/SkeletonLoader.jsx";

import AppCSS from "./App.module.css";

//custom react hook
function useLocalStorage(itemName, initialValue) {
  //CREACION Y ALMACENAMIENTO EN EL LOCALSTORAGE
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else parsedItem = JSON.parse(localStorageItem);

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V3", []);
  const [search, setSearch] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [hideCompletedTodo, setHideCompletedTodo] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  
  const [loading, setLoading]=useState(true);
  const [error, setError]= useState(false);


  const completedTodos = todos.filter((x) => x.completed === true).length;

  useEffect(()=>{
    setInterval(() => {
        setLoading(false)
    }, 2000);

  },[]) 
  

  useEffect(() => {
    let newFilter = todos.filter((item) =>
      item.text.toLowerCase().includes(search.toLowerCase())
    );
    if (hideCompletedTodo)
      newFilter = newFilter.filter((item) => item.completed !== true);
    setFilteredTodos(newFilter);
  }, [todos, search, hideCompletedTodo]);

  const deleteTodo = (text) => {
    let todosAfterDelete = todos.filter((item) => item.text !== text);
    saveTodos(todosAfterDelete);
  };

  const completeTodo = (text) => {
    let modificateTodo = todos.map((item) => {
      if (item.text === text) item.completed = !item.completed;
      return item;
    });
    saveTodos(modificateTodo);
  };

  const addTodo = (text) => {
    console.log(`agregamos al array: ${text}`);
    let identicalItem = todos.filter(
      (item) => item.text.toLowerCase() === text.toLowerCase()
    );
    console.log(identicalItem);
    if (identicalItem.length < 1)
      saveTodos([...todos, { text, completed: false }]);
    else alert("The Task Already Exist!");
  };

  const toggleHideCompleteTodo = () => {
    setHideCompletedTodo(!hideCompletedTodo);
  };

  return (
    <div className={AppCSS.MainContainer}>
      <div className={AppCSS.LeftContainer}>
        <CreateTodoItem setOpenModal={setOpenModal} />
        <HideCompleteButton
          hideCompletedTodo={hideCompletedTodo}
          toggleHideCompleteTodo={toggleHideCompleteTodo}
        />
      </div>
      <div className={AppCSS.RightContainer}>
        <h1 className={AppCSS.MainTitle}>Your Tasks</h1>
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={todos.length}
        />
        <TodoSearch search={search} setSearch={setSearch} />

        {!error && loading && 
            <div className={AppCSS.RightListContainer}>
                <SkeletonLoader/>
            </div>}

        {!loading &&
        <TodoList
          lista={filteredTodos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />}


      </div>
      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo}></TodoForm>
        </Modal>
      )}
      {!error&& !!loading && <ModalError>
                           <ErrorLoading/>
                    </ModalError>}
      {error && <ModalError>
                        <ErrorError/>
                    </ModalError>}
      
      
      {!error && !loading && (todos.length<1) && <ModalError>
                                            <ErrorCreateFirstTodo/>
                                       </ModalError> }
        


    </div>
  );
}

export default App;
