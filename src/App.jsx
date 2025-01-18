import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Detail from "./Details";

const App = () => {
  return (
    <div className="py-4 px-1 min-h-screen sm:px-5 md:px-7 lg:px-9 flex bg-gradient-to-r from-yellow-600 to-lime-400">
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
