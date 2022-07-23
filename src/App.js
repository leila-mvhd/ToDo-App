import './App.css';
import { useEffect, useState } from 'react';
//components
import Header from './components/Header';
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'

function App() {


  const [tasks,setTasks]=useState([{id:'1',task : 'task one' , complete: true},{id:'2',task : 'task two' , complete: false}]);
  const [inputText,setInputText]=useState("");
  const [status , setStatus]=useState('all');
  const [filteredTasks,setFilteredTasks] = useState([]);

  useEffect(()=> {
    filterHandler()
  },[tasks , status])

  //functions
  const filterHandler = () =>{

    switch(status){
      case 'completed' :{
        setFilteredTasks(tasks.filter( task => task.complete === true))
        break;
      }
      case 'uncompleted' :{
        setFilteredTasks(tasks.filter( task => task.complete === false))
        break;
      }
      default : {
        setFilteredTasks(tasks);
      }
    }
  }
  
  return (
    <div className="App">
     <Header></Header>
       <ToDoForm inputText={inputText} setInputText={setInputText} tasks={tasks} setTasks={setTasks} setStatus={setStatus}></ToDoForm>
       <ToDoList tasks={tasks} setTasks={setTasks} filteredTasks={filteredTasks}></ToDoList>
       

    </div>
  );
}

export default App;
