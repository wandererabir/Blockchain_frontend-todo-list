import React from "react";
import BtnEditTask from "./BtnEditTask";
import BtnDeleteTask from "./BtnDeleteTask";


const ActionsTaskItem: React.FC<{ task: any[];list: string; }> = ({
  task,
  list,
}) => {
  //console.log(task);
  return (
    <>
      <div
        className="flex border-dashed border-slate-400 dark:border-slate-700/[.3] border-t-2 w-full pt-4 mt-4">
        <BtnDeleteTask taskId={task[0]} listId={list} />
        <BtnEditTask task={task} listId={list} />
      </div>
    </>
  );
};

export default ActionsTaskItem;
