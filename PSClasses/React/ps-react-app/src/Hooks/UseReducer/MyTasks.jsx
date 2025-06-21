import React, { useReducer, useState } from 'react'

const MyTasks = () => {
    const [task, setTask] = useState('');
    const [editId, setEditId] = useState(null);
    const initialState = {
        tasks : []
    }

    const [state, dispatch] = useReducer(reduce, initialState);

    function reduce(state, action){
        switch(action.type){
            case 'add' :
                return {
                    ...state,
                    tasks: [...state.tasks, {id:Date.now(), text: action.payload}]
                }
            case 'edit' : 
                return{
                    ...state,
                    tasks: state.tasks.map((t) => t.id === action.payload.id ? {...task, text:action.payload.text} : task)
                }
        }
    }

    function handleAddTask(){
        dispatch({type: 'add', payload:task})
        setTask('')
    }
    function handleEditTask () {
        dispatch({type:'edit', payload:{id:editId, text:task}})
        setTask('');
        setEditId(null)
    }
  return (
    <React.Fragment>
        <h2>My Tasks</h2>
        <input type='text' placeholder='add task' value={task} onChange={(e) => setTask(e.target.value)} />
        <ul>
            {
                state.tasks.map((t) => <li>{t.text}

                <button onClick={() =>{
                     setTask(t.text);
                     setEditId(t.id)
                 } }>Edit</button>
                </li>)
            }
        </ul>
        <button onClick={editId ?  handleEditTask :handleAddTask}>{editId ? 'update task' : 'add task'}</button>
    </React.Fragment>
  )
}

export default MyTasks