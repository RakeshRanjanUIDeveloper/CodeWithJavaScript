import React, { useState } from 'react'

const Tasks = ({taskItems}) => {
    const [tasks, setTasks] = useState(taskItems);
    const doneStyle ={
        color:'red',
        textDecorationLine:'line-through'
    }
    const handleDone = (taskId) =>{
       const updatedTask = tasks.map((task) => (
        task.id === taskId? {...task, isDone: !task.isDone} : task
       ))
       setTasks(updatedTask)
       
    }
  return (
    <div>
        <h2>Tasks</h2>
        <ol>
            {
                tasks.map((t) =>(
                        <li key={t.id} style={t.isDone  ? doneStyle : {}}>{t.task}
                            <button onClick={() => handleDone(t.id)}>Mark as Done</button>
                        </li>
                ))
            }
        </ol>
    </div>
  )
}

export default Tasks