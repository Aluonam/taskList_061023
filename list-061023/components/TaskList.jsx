import React, { useState } from 'react'
import { Task } from './Task';

const TaskList = () => {

    const [dataList, setDataList] = useState([]);

    const [dataInput, setDataInput] = useState("");

    const handleSaveTask = () => {
        const newArr = structuredClone(dataList);
        newArr.push(dataInput);
        setDataList(newArr);
        setDataInput("")
    }

  return (
    <>
    <input onChange={(e)=>{setDataInput(e.target.value)}} value={dataInput}></input>
    <button onClick={()=>{handleSaveTask()}}>enviar lista</button>
    <Task dataList={dataList}></Task>
    </>
  )
}

export default TaskList