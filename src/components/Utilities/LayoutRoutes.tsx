import React, { useState } from "react";
import TaskItem from "../TasksSection/TaskItem/TaskItem";
import { ReactComponent as Add } from "../../assets/add.svg";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import BtnAddTask from "./BtnAddTask";
import { ethers } from "ethers";

type Props = {
  title: string;
  todolist: any[];
};

const LayoutRoutes: React.FC<Props> = ({ title, todolist }) => {
  const [ListName, setListName] = useState('');

  const tasksTitle = `${title} (${todolist.length} ${
    todolist.length === 1 ? "list" : "lists"
  })`;

  const handleListNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListName(e.target.value);
  };

  const addList = async () => {
    const Address = "0xb59484Fc012d62E00036C779A9bd098c5F54f3ED";
    const ABI = [{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"string","name":"_id","type":"string"}],"name":"addList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"listid","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"}],"name":"addTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"address2ListIds","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"todoId","type":"string"},{"internalType":"string","name":"listid","type":"string"}],"name":"deleteTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getTodos","outputs":[{"components":[{"internalType":"string","name":"id","type":"string"},{"components":[{"internalType":"string","name":"id","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bool","name":"isDone","type":"bool"}],"internalType":"struct TodoLists.TodoItem[]","name":"todos","type":"tuple[]"}],"internalType":"struct TodoLists.TodoList[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserIds","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"id2TodoItems","outputs":[{"internalType":"string","name":"id","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bool","name":"isDone","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listIds","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"listIds2exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_id","type":"string"}],"name":"removeList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"todoCnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"todoId","type":"string"},{"internalType":"string","name":"listid","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"}],"name":"updateTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"user2used","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(Address, ABI, signer);
    await contract.addList(ListName);
    setListName('');
  };

  const removeList = async (listName: string) => {
    const Address = "0xb59484Fc012d62E00036C779A9bd098c5F54f3ED";
    const ABI = [{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"string","name":"_id","type":"string"}],"name":"addList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"listid","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"}],"name":"addTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"address2ListIds","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"todoId","type":"string"},{"internalType":"string","name":"listid","type":"string"}],"name":"deleteTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getTodos","outputs":[{"components":[{"internalType":"string","name":"id","type":"string"},{"components":[{"internalType":"string","name":"id","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bool","name":"isDone","type":"bool"}],"internalType":"struct TodoLists.TodoItem[]","name":"todos","type":"tuple[]"}],"internalType":"struct TodoLists.TodoList[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserIds","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"id2TodoItems","outputs":[{"internalType":"string","name":"id","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bool","name":"isDone","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listIds","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"listIds2exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_id","type":"string"}],"name":"removeList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"todoCnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"todoId","type":"string"},{"internalType":"string","name":"listid","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"}],"name":"updateTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"user2used","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(Address, ABI, signer);
    await contract.removeList(listName);
  };


  return (
    <section >
      <div className="border-b-4 border-slate-700 p-5">
      <h1 className="font-medium py-2 px-4  text-center sm:text-left md:text-xl text-lg dark:text-slate-200 underline decoration-indigo-500">
         {tasksTitle}
      </h1>
      </div>
      <div className="tasksList grid gap-2 sm:gap-4 xl:gap-6 grid-cols-3 p-5">

         {todolist.map((list) => (
         <ul key={list[0]}
        className="2xl:grid-rows-4 xl:grid-rows-3 lg:grid-rows-4 md:grid-rows-3 items-end"
      >
        <li>
          <div className="flex flex-row shadow-2xl text-white font-bold capitalize mb-3 bg-slate-500 rounded-lg p-3 sm:p-4 flex text-left hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-600 dark:hover:shadow-transparent">
            <span className="flex-grow">List: {list[0]}</span>
            <button onClick={() => removeList(list[0])} className="ml-auto"><Trash/></button>
          </div>
        </li>
        
        <li>
          <BtnAddTask listId={list[0]}/>
        </li>


        {list[1].map((item: any[]) => (
          <TaskItem key={item[0]} task={item} list={list[0]}/>
        ))}

         </ul>))}

         <ul key="createlist"
        className="2xl:grid-rows-4 xl:grid-rows-3 lg:grid-rows-4 md:grid-rows-3 items-end">
        <li>
        <div className="flex flex-row shadow-2xl text-white font-bold capitalize mb-3 bg-slate-500 rounded-lg p-3 sm:p-4 flex text-left hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-600 dark:hover:shadow-transparent">
          <input id="listname" name="listname" autoComplete="listname" value={ListName} onChange={handleListNameChange} placeholder="Add Todo-List" className="flex-grow mr-2 bg-slate-500 dark:bg-slate-600" />
          <button onClick={addList} className="ml-auto"><Add /></button>
          </div>
        </li>
        </ul>

      </div>
    </section>
  );
};

export default React.memo(LayoutRoutes);
