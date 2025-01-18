import React, { createContext, useState } from "react";

export const shopContext = createContext();
const ShopContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
   const [additionalText, setAdditionalText] = useState("");
  const value = {
    tasks,
    setTasks,
    newTask,
    setNewTask,
    editIndex,
    setEditIndex,
    additionalText,
    setAdditionalText,
  };

  return (
    <shopContext.Provider value={value}>{props.children}</shopContext.Provider>
  );
};

export default ShopContextProvider;
