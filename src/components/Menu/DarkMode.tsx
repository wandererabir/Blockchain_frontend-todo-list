import React, { useEffect, useState } from "react";
import { ReactComponent as IconBell } from "../../assets/bell.svg";

const DarkMode: React.FC = () => {
  const [isCurrentDarkmode, setIsCurrentDarkmode] = useState<boolean>(() => {
    const darkModeWasSet = localStorage.getItem("darkmode");
    if (darkModeWasSet) return true;
    else return false;
  });
  const toggleDarkMode = () => {
    setIsCurrentDarkmode((prevState) => !prevState);
  };

  useEffect(() => {
    const html = document.querySelector<HTMLHtmlElement>("html")!;
    if (isCurrentDarkmode) {
      html.classList.add("dark");
      localStorage.setItem("darkmode", "true");
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#0f172a");
    } else {
      html.classList.remove("dark");
      localStorage.removeItem("darkmode");
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#e2e8f0");
    }
  }, [isCurrentDarkmode]);

  return (
    <div className="flex flex-row items-center mt-4 mb-8">
    <IconBell className="fill-slate-500 w-8 h-8 mx-2 md:w-8 md:h-8 hover:fill-black dark:fill-white"/>
    <button
      className="ml-4 flex items-center justify-end"
      onClick={toggleDarkMode}
    >
    <div className={`w-10 h-5 ${isCurrentDarkmode ? 'bg-slate-200' : 'bg-slate-500' } rounded-full px-0.5 dark:bg-slate-700/[.3] relative flex items-center dark:justify-end`}>
       <div className={`w-4 h-4 rounded-full ${isCurrentDarkmode ? 'bg-violet-600' : 'bg-yellow-300'} absolute`}></div>
    </div>

    </button>
    </div>
  );
};

export default React.memo(DarkMode);
