import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "./Context";
import { Link } from "react-router-dom";

const Todo = () => {
  const { tasks, setTasks, newTask, setNewTask, editIndex, setEditIndex } =
    useContext(shopContext);
  const [completedTask, setCompletedTask] = useState(null);

  useEffect(() => {
    if (completedTask !== null) {
      alert(`Task "${completedTask.text}" completed!`);
      setCompletedTask(null);
    }
  }, [completedTask]);

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return;
    if (editIndex !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? { ...task, text: newTask } : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks((prevTasks) => [
        ...prevTasks,
        { text: newTask, complete: false, additionalText: [] },
      ]);
    }
    setNewTask("");
  }

  function deletetask(index) {
    const update = tasks.filter((_, i) => i !== index);
    setTasks(update);
  }

  function updatetask(index) {
    setNewTask(tasks[index].text);
    setEditIndex(index);
  }

  function toggleComplete(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, complete: !task.complete } : task
    );
    setTasks(updatedTasks);
    if (!tasks[index].complete) {
      setCompletedTask(tasks[index]);
    }
  }

  return (
    <div className="flex items-center md:justify-center w-full px-2">
      <div className="bg-white rounded-xl flex flex-col text-black my-3 text-center w-full md:w-3/4">
        <h1 className="text-blue-600 font-black text-2xl mb-10 flex justify-center items-center">
          Plans To Do
        </h1>
        <div className="mb-5 m-4 flex items-center justify-around">
          <input
            placeholder="Developed by Sajid"
            type="text"
            value={newTask}
            onChange={handleInputChange}
            className="bg-lime-200 rounded w-3/4 placeholder:text-center border-2 border-slate-400 py-1 px-2"
          />
          <button
            onClick={addTask}
            className="ml-4 border-2 border-black hover:font-bold bg-amber-500 py-1 px-4 rounded-md"
          >
            Add
          </button>
        </div>
        <div className="mt-10">
          <ol>
            {tasks.map((task, index) => (
              <li
                key={index}
                className="bg-black text-white text-left rounded flex justify-between items-center m-2 p-2 break-words"
              >
                <span
                  className={`ml-2 flex-grow w-1/3 ${
                    task.complete ? "text-green-400" : ""
                  }`}
                >
                  {task.text}
                </span>
                <div className="flex gap-2 flex-col py-2 ml-1">
                  <button
                    onClick={() => updatetask(index)}
                    className="border-2 border-black hover:font-bold bg-red-500 py-1 px-2 rounded-md"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deletetask(index)}
                    className="border-2 border-black hover:font-bold bg-red-500 py-1 px-2 rounded-md"
                  >
                    Delete
                  </button>
                  <div>
                    <button
                      onClick={() => toggleComplete(index)}
                      className="flex-1 border-2 border-black hover:font-bold bg-red-500 py-1 px-2 rounded-md"
                    >
                      {task.complete ? "Pending" : "Complete"}
                    </button>
                  </div>
                  <div>
                    <Link to={`/details/${index}`}>
                      <button className="w-full border-2 border-black hover:font-bold bg-red-500 py-1 px-2 rounded-md">
                        Deatails
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Todo;
