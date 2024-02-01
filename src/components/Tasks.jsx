import React from "react";

function Tasks({ taskName, taskDate, deleteButton }) {
  return (
    <div className="container text-center">
      <div className="row row-cols-4 mt-4 flex justify-center">
        <div className="col ">{taskName}</div>
        <div className="col mr-10">{taskDate}</div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteButton(taskName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Tasks;
