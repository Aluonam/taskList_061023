import React, { useState } from 'react'

const TaskList = () => {

    const [dataList, setDataList] = useState([]);

    const [dataInput, setDataInput] = useState("");


  return (
    <>
    <input onChange={(e)=>{setDataInput(e.target.value)}} value={dataInput}></input>
    <button onClick={()=>{setDataList(dataInput)}}>enviar lista</button>
    {dataList}
    </>
  )
}

export default TaskList