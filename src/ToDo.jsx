
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function ToDo() {
  let [arrays, setarr] = useState([]);

  function optionCapture(event) {
    event.preventDefault();

    let name = document.getElementById("Task").value;

    setarr((prevarr) => {
      return [...prevarr, { task: name, id: uuidv4(), done: false }];
    });

    document.getElementById("Task").value = "";
  }

  function deleteTodo(id) {
    let del = arrays.filter((array) => array.id != id);
    setarr(del);
  }

  function uppercase() {
    setarr(
      arrays.map((array) => {
        return { ...array, task: array.task.toUpperCase() };
      })
    );
  }

  function uppercaseone(id) {
    setarr(
      arrays.map((array) => {
        if (array.id == id) {
          return { ...array, task: array.task.toUpperCase() };
        } else {
          return array;
        }
      })
    );
  }

  function MarkasDoneOne(id) {
    setarr(
      arrays.map((array) => {
        if (array.id == id) {
          return { ...array, done: !array.done };
        } else {
          return array;
        }
      })
    );
  }

  function markasDoneAll() {
    setarr(
      arrays.map((array) => {
        return { ...array, done: true };
      })
    );
  }

  return (
    <div className="app">
      <h1>Welcome! Enter your tasks</h1>

      <form>
        <div className="input-container">
          <input
            placeholder="Enter your task"
            id="Task"
            type="text"
          />

          <button type="submit" onClick={optionCapture}>
            Add
          </button>
        </div>

        <div className="task-list">
          {arrays.map((array) => {
            return (
              <div
                key={array.id}
                className={`task ${array.done ? "completed" : ""}`}
              >
                <p>{array.task}</p>

                <div className="task-buttons">
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => deleteTodo(array.id)}
                  >
                    Delete
                  </button>

                  <button
                    type="button"
                    className="upper-btn"
                    onClick={() => uppercaseone(array.id)}
                  >
                    Uppercase
                  </button>

                  <button
                    type="button"
                    className="done-btn"
                    onClick={() => MarkasDoneOne(array.id)}
                  >
                    {array.done ? "Undo" : "Mark Done"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </form>

      <div className="actions">
        <button className="upper-btn" onClick={uppercase}>
          Uppercase All
        </button>

        <button className="done-btn" onClick={markasDoneAll}>
          Mark All Done
        </button>
      </div>
    </div>
  );
}

export default ToDo;

