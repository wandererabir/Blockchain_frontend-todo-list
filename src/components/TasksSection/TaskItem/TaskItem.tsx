import React from "react";
import InfosTask from "./InfosTask";
import ActionsTaskItem from "./ActionsTaskItem";

const TaskItem: React.FC<{task: any[], list: string; }> = ({
  task,
  list,
}) => {
  //console.log(task)
  return (
    <>
      <li key={task[0]}>
        <article
          className="shadow-2xl mb-3 bg-slate-100 border-2 border-slate-500 dark:border-0 rounded-lg p-3 sm:p-4 flex text-left hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent flex-col min-h-content sm:h-30">
          <InfosTask task={task} />
          <ActionsTaskItem task={task} list={list} />
        </article>
      </li>
    </>
  );
};

export default React.memo(TaskItem);
