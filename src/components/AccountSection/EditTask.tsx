import React,  { useState, FormEvent, useEffect } from "react";
import { ReactComponent as Icon} from "../../assets/arrowleft.svg";
import { ethers } from "ethers";

const EditTask: React.FC<{}> = ({  }) => {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');

  const OpenEditTodo =  localStorage.getItem('OpenEditTodo') === 'true';
  const listId = localStorage.getItem('listId');
  const todoId = localStorage.getItem('todoId');

  useEffect(() => {
    const storedTitle = localStorage.getItem('title');
    const storedDescription = localStorage.getItem('description');
    if (storedTitle) {
      setTitle(storedTitle);
    }
    if (storedDescription) {
      setDescription(storedDescription);
    }
  }, []);

  const connectContract = async () => {
    const Address = "0xb59484Fc012d62E00036C779A9bd098c5F54f3ED";
    const ABI = [{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"string","name":"_id","type":"string"}],"name":"addList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"listid","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"}],"name":"addTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"address2ListIds","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"todoId","type":"string"},{"internalType":"string","name":"listid","type":"string"}],"name":"deleteTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getTodos","outputs":[{"components":[{"internalType":"string","name":"id","type":"string"},{"components":[{"internalType":"string","name":"id","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bool","name":"isDone","type":"bool"}],"internalType":"struct TodoLists.TodoItem[]","name":"todos","type":"tuple[]"}],"internalType":"struct TodoLists.TodoList[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserIds","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"id2TodoItems","outputs":[{"internalType":"string","name":"id","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bool","name":"isDone","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listIds","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"listIds2exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_id","type":"string"}],"name":"removeList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"todoCnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"todoId","type":"string"},{"internalType":"string","name":"listid","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"}],"name":"updateTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"user2used","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"users","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(Address, ABI, signer);
    await contract.updateTodo(todoId, listId, Title, Description);
    exitTodo();
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setDescription(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform any desired actions with the form data
    console.log('Title:', Title);
    console.log('Description:', Description);
    connectContract();
    // Clear the form
    setTitle('');
    setDescription('');
  };

  const exitTodo = () =>{
    localStorage.setItem('OpenEditTodo', 'false');
    window.location.reload();
  };

  return (
    <>
    { !OpenEditTodo ? null :
       <div className="flex min-h-content flex-col px-1 lg:p-5 border-l-4 border-slate-700">
  <div className="flex items-center flex-row sm:mx-auto sm:w-full sm:max-w-sm">
  <Icon onClick={() => exitTodo()}  className="cursor-pointer mt-10 mr-11 fill-white w-5 h-5 mx-3 hover:fill-violet-600 hover:w-7 hover:h-7 md:w-5 md:h-5 dark:fill-white-800" />
  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">Edit Todo</h2>

  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Title</label>
        <div className="mt-2">
          <input id="title" name="title" type="text" autoComplete="title" value={Title}  onChange={handleTitleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Description</label>
        </div>
        <div className="mt-2">
          <input id="description" name="description" type="text" autoComplete="description" value={Description} onChange={handleDescriptionChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button  type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit</button>
      </div>
    </form>
  </div>
       </div>
    }

    </>
  );
};

export default EditTask;
