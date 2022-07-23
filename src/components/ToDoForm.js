import React , {useState} from 'react';
import styled from 'styled-components';

import addIcon from "../assets/icons/add.png";

const Button = styled.button`
width: 30px;
height: 30px;
background-color: #8fffb8;
border: none;
border-radius: 5px;
text-align: center;
line-height: 12px;
position: relative;
right: 36px;
top: 4px;
&:hover{
    background-color: #7de3a3; 
    cursor:pointer;
}
img{
    width:18px;
}
`
const MyInput = styled.input`
    border:none;
    width:300px;
    border-radius:5px;
    padding:12px;

`

const Select = styled.select`
height:36px;
border:none;
width:100px;
padding:8px;
border-radius:5px;
`
const MyForm = styled.div`
    padding:50px 0;
`


const ToDoForm = ({tasks,inputText,setInputText,setTasks,setStatus}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTaskHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks,{id: Math.random() * 1000 ,task : inputText , complete: false}]);
        setInputText("");
        // console.log(tasks);
    }

    const selectHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <MyForm>
            <form>
           <MyInput value={inputText} type="text" onChange={inputTextHandler} placeholder="Enter task..."></MyInput>
           <Button type='submit' onClick={submitTaskHandler}><img src={addIcon} /></Button>
           <Select onChange={selectHandler}>
               <option value='all'>All</option>
               <option value='completed'>completed</option>
               <option value='uncompleted'>uncompleted</option>
           </Select>
                
            </form>
        </MyForm>
    );
};

export default ToDoForm;