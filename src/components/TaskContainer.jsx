import React from "react";
import Tasks from "./Tasks";

function TaskContainer({ tasks, deleteButton }) {
  return (
    <>
      {tasks.map((task) => (
        <Tasks
          key={task.name}
          taskName={task.name}
          taskDate={task.date}
          deleteButton = {deleteButton}
        ></Tasks>
      ))}
    </>
  );
}

export default TaskContainer;
