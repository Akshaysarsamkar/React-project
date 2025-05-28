import React from "react";
import NavBar from "./NavBar";
import FormContainer from "./FormContainer";
import TodoList from "./TodoList";
import TaskContext from "./context/TaskContext";

const App = () => {
  return (
    <>
      <NavBar />
      <TaskContext>
        <main className="mainContainer">
          <FormContainer />
          <TodoList />
        </main>
      </TaskContext>
    </>
  );
};

export default App;
