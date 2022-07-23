import React from 'react';
import styled from 'styled-components';

import deleteIcon from "../assets/icons/delete.png";
import checkIcon from "../assets/icons/check.png";

const Button = styled.button`
    width: 40px;
    height: 38px;
    background-color: ${props => props.redButton ? "#f85454" : "#8fffb8"};
    border: none;
    border-radius: 5px;
    text-align: center;
    line-height: 12px;
    margin-left: 5px;
    &:hover{
        background-color:${props => props.redButton ? "#eb4e4e" : "#7de3a3"};
        cursor:pointer;
    }
    img{
        width:18px;
    }
`


const MyLi = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom:5px;
    
    span{
        width: 100%;
        background-color: white;
        text-align: left;
        padding: 8px;
        border-radius:5px;
        text-decoration:${props => props.taskData.complete ? "line-through" : "none"};
        opacity:${props => props.taskData.complete ? "0.6" : "1"};
    }
    
`

const ToDo = ({taskData,setTasks,tasks}) => {
    //events
    const deleteHandler = () => {
        const newTaskList=tasks.filter(item => item.id !== taskData.id );
        setTasks(newTaskList);
    }

    const completeHandler = () => {
        setTasks(tasks.map((item) => {
            if(item.id === taskData.id){
            return{
                ...item,
                complete: !item.complete
            };
        }
        return item;
        }));
        // console.log(tasks);
        
    };


    return (
        <div>
            <MyLi taskData={taskData} className={`todo-list ${taskData.complete ? "completed" : ""}`}>
            <span>{taskData.task}</span>
            <Button onClick={completeHandler}><img src={checkIcon} /></Button>
            <Button onClick={deleteHandler} redButton><img src={deleteIcon} /></Button>
            </MyLi>
            
        </div>
    );
};

export default ToDo;