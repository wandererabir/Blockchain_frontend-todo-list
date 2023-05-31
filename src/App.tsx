import React from "react";
import AccountData from "./components/AccountSection/AccountData";
import Footer from "./components/Footer";
import Menu from "./components/Menu/Menu";
import TasksSection from "./components/TasksSection/TasksSection";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

const App: React.FC = () => {
  let [account, setAccount] = useState("");
  let [TodoData, setTodoData] = useState([]);
  let [Contract, setContract] = useState<any | null>(null);

  const { ethereum } = window;

  useEffect (() =>{
  const connectContract = async () => {
    if(window.ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: "eth_requestAccounts"});
      setAccount(accounts[0]);
      localStorage.setItem('AccountMeta', accounts[0]);
      //console.log(accounts[0])
    }
    else{
      console.log("error")
    }
    const Address = "0xb59484Fc012d62E00036C779A9bd098c5F54f3ED";
    const ABI = [{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"string","name":"_id","type":"string"}],"name":"addList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"listid","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"}],"name":"addTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"address2ListIds","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"todoId","type":"string"},{"internalType":"string","name":"listid","type":"string"}],"name":"deleteTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getTodos","outputs":[{"components":[{"internalType":"string","name":"id","type":"string"},{"components":[{"internalType":"string","name":"id","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bool","name":"isDone","type":"bool"}],"internalType":"struct TodoLists.TodoItem[]","name":"todos","type":"tuple[]"}],"internalType":"struct TodoLists.TodoList[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserIds","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"id2TodoItems","outputs":[{"internalType":"string","name":"id","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bool","name":"isDone","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listIds","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"listIds2exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_id","type":"string"}],"name":"removeList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"todoCnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"todoId","type":"string"},{"internalType":"string","name":"listid","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"}],"name":"updateTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"user2used","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(Address, ABI, signer);
    setContract(contract);
    //localStorage.setItem('Contract', JSON.stringify(contract));
    getTodos();
  }
  connectContract();
},[account]);

  const getTodos = async () => {
    const phrase = await Contract.getTodos(account);
    setTodoData(phrase);
    //console.log(phrase)
  }



  return (
    <>
    <div className="bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs">
  <div className="sticky top-0 z-10">
    <div className="bg-blue-600 text-center text-white py-2 text-base font-bold">
      Achieve organization and clarity with our assistance. Make better choices.
    </div>
  </div>

  <div>
  <Menu />
  <TasksSection todolist={TodoData} />
  <AccountData />
  </div>
  
  <Footer />
  
</div>

    </>
  );
};

export default App;
