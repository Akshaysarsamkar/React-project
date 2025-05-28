import React, { createContext, useState } from 'react'


export const TaskApi = createContext()

const TaskContext = (props) => {

    let [formData,setFormData] = useState({
        title:"",
        category:"",
        description:""
    })


    //ONCHANGE 
    let handleChange=()=>{

    }

    //ONSUBMIT
    let handleSubmit = (event)=>{

          event.preventDefault()
    }


  return (
    <TaskApi.Provider value={{formData,handleChange,handleSubmit}}>
      {props.children}
    </TaskApi.Provider>
  )
}

export default TaskContext
