import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import NavLinks from "./NavLinks";
import LayoutMenus from "../Utilities/LayoutMenus";
import avatar1 from "../../assets/avatar-1.jpg";
import { ReactComponent as Icon} from "../../assets/arrowleft.svg";
import DarkMode from "./DarkMode";

const classLinkActive =
  "text-white bg-slate-500 rounded-lg dark:bg-slate-500/[.2] dark:text-slate-200 ";

const Menu: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuHeaderOpened);
  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuHeader());
  };
  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="left-0 pr-2 border-r-4 border-slate-700"
    >
      <header className="h-full flex flex-col">
      <div className="sticky top-0 z-10">
      <span className="flex items-center mt-8">
      <img src={avatar1} alt="cat" className="w-10 rounded-full ml-4 mr-2" />
        <h1 className="font-bold uppercase text-lg tracking-wide hidden xl:block text-black dark:text-white ">
          Abir Paul
        </h1>
        <div className="flex-grow"></div>
        <Icon className="cursor-pointer fill-white w-5 h-5 mx-3 hover:fill-violet-600 hover:w-7 hover:h-7 md:w-5 md:h-5 dark:fill-white-800"/>
      </span>
        <NavLinks classActive={classLinkActive} />
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-row gap-2 mx-auto">
          <button className="btn dark:bg-slate-700 sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400 dark:shadow-slate-900 sm:shadow-transparent flex flex-row items-center gap-2">
             <img src={avatar1} alt="cat" className="w-5 rounded-full" />
             <span>$0.00</span>
          </button>
          <button className="btn sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400  dark:shadow-slate-900 sm:shadow-transparent">Buy $XYZ</button>
        </div>
        <DarkMode />
      </header>
      
    </LayoutMenus>
  );
};

export default Menu;
