import React from 'react'

export const Task = ({dataList}) => {

    const listado = dataList.map((actualTask)=>{
        return(
            <ul>
                <li>{actualTask}</li>
            </ul>
        )
    })
  return (
    <>{listado}</>
  )
}
