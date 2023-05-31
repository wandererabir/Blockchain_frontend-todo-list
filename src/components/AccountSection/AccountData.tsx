import React from "react";
import LayoutMenus from "../Utilities/LayoutMenus";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import EditTask from "./EditTask";

const AccountData: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuAccountOpened);
  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount());
  };
  return (
<LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="top-10 right-0 z-0 "
    >
      <section className=" flex flex-col h-full ">
        <div className="border-b-4 border-slate-700 p-5">
          <button className="bg-slate-600 ml-auto py-2 px-4 xl:w-9/12 text-slate-50 rounded-lg   dark:bg-slate-700 sm:static fixed bottom-3 right-3 z-10 sm:z-0 shadow-lg shadow-slate-400 hover:shadow-slate-900 sm:shadow-transparent flex flex-row items-center">
             <span className="font-bold">$ 0.2 XYZ</span>
             <div className="flex-grow"></div>
             <span className="bg-slate-600 py-1 px-3 text-slate-50 rounded-lg sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max mx-1 shadow-lg shadow-slate-400 bg-violet-800  dark:shadow-slate-900 sm:shadow-transparent">Tier I</span>
          </button>
        </div>
          <EditTask />

          <div className="flex-grow border-l-4 border-slate-700"></div>

          <div className="border-l-4 border-slate-700 flex justify-center">
            <a href="https://github.com/wandererabir" className="my-4 bg-rose-100 px-5 py-2 rounded-md text-rose-600 dark:bg-slate-700/[.3] dark:text-slate-200" > 
            Made by Abir Paul
            </a>
          </div>


      </section>
    </LayoutMenus>
  );
};

export default AccountData;
