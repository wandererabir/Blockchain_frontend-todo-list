import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Routes/Home";

type Props = {
  todolist: any[];
}; 

const TasksSection: React.FC<Props> = ({ todolist }) => {
  return (
    <main className="bg-slate-100 dark:bg-slate-800 pt-1 pb-8 sm:pb-16 md:w-full xl:w-3/5 m-auto min-h-screen">
      <Routes>
        <Route path="/" element={<Home todolist={todolist} />} />
      </Routes>
    </main>
  );
};

export default TasksSection;
