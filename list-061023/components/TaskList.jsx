import React, { useState } from 'react'

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
    {dataList}
    </>
  )
}

export default TaskList