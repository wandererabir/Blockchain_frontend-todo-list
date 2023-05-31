import React from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
type Props = {
  todolist: any[];
}; 

const Home:  React.FC<Props> = ({ todolist }) => {
  return <LayoutRoutes title="Section 4" todolist={todolist}></LayoutRoutes>;
};

export default Home;
