import React, { useState, FormEvent } from "react";
import { ethers } from "ethers";
import { ReactComponent as Add } from "../../assets/add.svg";

const BtnAddTask: React.FC<{ listId: string, }> = ({ listId }) => {
    const [isListInView1, setIsListInView1] = useState<boolean>(false);
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      };
    
      const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
      };
    
      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        connectContract();
        setTitle('');
        setDescription('');
      };


  const connectContract = async () => {
    const Address = "0xb59484Fc012d62E00036C779A9bd098c5F54f3ED";
    const ABI = [{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"string","name":"_id","type":"string"}],"name":"addList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"listid","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"}],"name":"addTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"address2ListIds","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"todoId","type":"string"},{"internalType":"string","name":"listid","type":"string"}],"name":"deleteTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getTodos","outputs":[{"components":[{"internalType":"string","name":"id","type":"string"},{"components":[{"internalType":"string","name":"id","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bool","name":"isDone","type":"bool"}],"internalType":"struct TodoLists.TodoItem[]","name":"todos","type":"tuple[]"}],"internalType":"struct TodoLists.TodoList[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserIds","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"id2TodoItems","outputs":[{"internalType":"string","name":"id","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bool","name":"isDone","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listIds","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"listIds2exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_id","type":"string"}],"name":"removeList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"todoCnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"todoId","type":"string"},{"internalType":"string","name":"listid","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"}],"name":"updateTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"user2used","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(Address, ABI, signer);
    await contract.addTodo(listId, Title, Description);
    window.location.reload();
  }

  return (
    <>
     <article
          className={`shadow-2xl mb-3 bg-slate-100 border-2 border-slate-500 dark:border-0 rounded-lg p-3 sm:p-4 flex text-left hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent ${
            isListInView1 ? "flex-row sm:h-32" : "flex-col min-h-content sm:h-30"
          }`}
        >
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
               <div className="mt-2">
                   <input id="title" name="title" type="text" autoComplete="title" required placeholder="Add Todo" value={Title}  onChange={handleTitleChange} className="block font-bold w-full dark:bg-slate-900 rounded-md border-0 py-1.5 dark:text-white shadow-sm dark:placeholder:text-gray-400 sm:text-sm sm:leading-6" />
               </div>
            </div>

            <div>
                <div className="mt-2">
                     <textarea  id="description" name="description" autoComplete="description" placeholder="Add Todo Description" value={Description} onChange={handleDescriptionChange}  required className="block w-full dark:bg-slate-900  rounded-md border-0 py-1.5 dark:text-white shadow-sm  dark:placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                </div>
            </div>

             <div className={`flex border-dashed border-slate-400 dark:border-slate-700/[.3] ${ isListInView1 ? "items-center" : "border-t-2 w-full pt-4 mt-4"}`}>
                <button type="submit" className="ml-2 fill-slate-500 transition hover:fill-black dark:hover:fill-white" > 
                <Add className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
             </div>
        </form>

     </article>
    </>
  );
};

export default React.memo(BtnAddTask);




