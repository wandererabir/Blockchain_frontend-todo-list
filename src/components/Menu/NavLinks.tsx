import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Icon } from "../../assets/star-line.svg";

const links = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "Section 1",
    path: "",
  },
  {
    name: "Section 2",
    path: "",
  },
  {
    name: "Section 3",
    path: "",
  },
  {
    name: "Section 4",
    path: "/",
  },
];

const NavLinks: React.FC<{ classActive: string }> = ({ classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;
  return (
    <nav>
      <ul className="grid gap-2 mt-10 text-lg">
        {links.map((link) => (
          <li key={link.path}>           
              <NavLink
              to={link.path}
              className={`px-4 py-2 w-full block transition hover:text-rose-600  dark:hover:text-slate-200 flex flex-row items-center gap-2 ${
                currentPath === link.path ? classActive : ""
              }`}
              >
                <Icon />
                <span>{link.name}</span>
              </NavLink>

          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
