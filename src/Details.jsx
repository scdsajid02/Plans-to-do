import React, { useContext, useState } from "react";
import { shopContext } from "./Context";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { tasks, setTasks } = useContext(shopContext);
  const { id } = useParams();
  const task = tasks[id];
  const [additionalText, setAdditionalText] = useState("");

  function handleInputChange(e) {
    const updatedTask = { ...task, text: e.target.value };
    const updatedTasks = tasks.map((t, index) =>
      index === parseInt(id) ? updatedTask : t
    );
    setTasks(updatedTasks);
  }

  function handleAdditionalTextChange(e) {
    setAdditionalText(e.target.value);
  }

  function addAdditionalText() {
    const updatedTask = {
      ...task,
      additionalText: task.additionalText
        ? [...task.additionalText, additionalText]
        : [additionalText],
    };
    const updatedTasks = tasks.map((t, index) =>
      index === parseInt(id) ? updatedTask : t
    );
    setTasks(updatedTasks);
    setAdditionalText("");
  }

  function deleteAdditionalText(index) {
    const updatedTask = {
      ...task,
      additionalText: task.additionalText.filter((_, i) => i !== index),
    };
    const updatedTasks = tasks.map((t, i) =>
      i === parseInt(id) ? updatedTask : t
    );
    setTasks(updatedTasks);
  }

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className="flex items-center md:justify-center w-full px-2">
      <div className="bg-white rounded-xl flex flex-col text-black my-3 text-center w-full md:w-3/4">
        <h1 className="text-blue-600 font-black text-2xl mb-10 flex justify-center items-center">
          Task Details
        </h1>
        <div className="mb-5 m-4 flex items-center justify-around">
          <input
            type="text"
            value={task.text}
            onChange={handleInputChange}
            className="bg-lime-200 rounded w-3/4 placeholder:text-center border-2 border-slate-400 py-1 px-2"
          />
        </div>
        <div className="mb-5 m-4 flex items-center justify-around">
          <input
            type="text"
            placeholder="Add Task Details"
            value={additionalText}
            onChange={handleAdditionalTextChange}
            className="bg-lime-200 rounded w-3/4 placeholder:text-center border-2 border-slate-400 py-1 px-2"
          />
          <button
            onClick={addAdditionalText}
            className="ml-4 border-2 border-black hover:font-bold bg-amber-500 py-1 px-4 rounded-md"
          >
            Add
          </button>
        </div>
        <div className=" bg-black text-white mx-2 rounded mb-2 ">
          <ol>
            {task.additionalText &&
              task.additionalText.map((text, index) => (
                <li
                  key={index}
                  className="bg-black text-white break-words flex my-8 items-center justify-between text-left"
                >
                  <div className="ml-2 flex-grow w-1/3">{text}</div>
                  <button
                    onClick={() => deleteAdditionalText(index)}
                    className="ml-2 h-11 border-2 border-black hover:font-bold bg-red-500 py-1 px-2 rounded-md"
                  >
                    Delete
                  </button>
                  
                </li>
                
              ))}
          </ol>
        </div>
        <Link to="/">
          <button className="border-2 border-black hover:font-bold bg-amber-500 py-1 px-4 rounded-md mb-2">
            Back to Todo List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
