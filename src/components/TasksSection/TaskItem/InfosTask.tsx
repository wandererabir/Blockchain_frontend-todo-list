import React from "react";

const InfosTask: React.FC<{ task: any[];}> = ({
  task,
}) => {

  return (
    <div className="flex flex-col flex-1">
      <div
        className="flex items-center justify-between mb-2">
        <span className="block capitalize font-medium dark:text-slate-200">
          {task[1]}
        </span>
      </div>
      <p
        title={task[2]}
        className="description mb-2 text-slate-500 dark:text-slate-500 line-clamp-3">
        {task[2]}
      </p>
    </div>
  );
};

export default InfosTask;
