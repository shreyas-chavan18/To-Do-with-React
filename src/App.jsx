import React, { useState } from "react";
import Title from "./components/Title";
import Input from "./components/Input";
import TaskContainer from "./components/TaskContainer";
import EmptyMessage from "./components/EmptyMessage";

function App() {
  const [tasks, setTasks] = useState([]);

  const addButton = (taskTile, taskDate) => {
    const newItems = [...tasks, { name: taskTile, date: taskDate }];
    setTasks(newItems);
  };

  const deleteButton = (taskTitle) => {
    const newArray = tasks.filter((item) => item.name != taskTitle);
    setTasks(newArray);
  };

  return (
    <>
      <Title></Title>
      <Input addButton={addButton}></Input>
      {tasks.length === 0 && <EmptyMessage></EmptyMessage>}
      <TaskContainer tasks={tasks} deleteButton={deleteButton}></TaskContainer>
    </>
  );
}

export default App;
