import React, { useState } from "react";
import { ReactComponent as OptionsSvg } from "../../../assets/options.svg";


const BtnEditTask: React.FC<{ task: any[],listId: string, }> = ({ task, listId }) => {
  const [OpenEditTodo, setOpenEditTodo] = useState<boolean>(false);

  const openEditTask = () => {
    setOpenEditTodo(true);
    localStorage.setItem('OpenEditTodo', 'true');
    localStorage.setItem('listId', listId);
    localStorage.setItem('todoId', task[0]);
    localStorage.setItem('title', task[1]);
    localStorage.setItem('description', task[2]);
    window.location.reload();
  };


  return (
    <>
      <button
        title="edit task"
        className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center fill-slate-500 dark:hover:fill-white hover:fill-black"
        onClick={openEditTask}
      >
        <OptionsSvg className="w-4 sm:w-5 h-4 sm:h-5 " />
      </button>
    </>
  );
};

export default BtnEditTask;
