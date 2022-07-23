import React from 'react';
import ToDo from './ToDo';
import styled from 'styled-components';


const MyTasks = styled.ul`
list-style: none;
width: 456px;
margin: 0 auto;
padding-left: 0;
`

const ToDoList = ({tasks,setTasks,filteredTasks}) => {
   
    return (
        <div>
         <MyTasks>
           {
               filteredTasks.map(task => (
                   <ToDo key={task.id} taskData={task} setTasks={setTasks} tasks={tasks}></ToDo>
               ))
           }
         </MyTasks>
        </div>
    );
};

export default ToDoList;