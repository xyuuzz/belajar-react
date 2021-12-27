import React from "react";

function ToDo()
{
    const [task, setTask] = React.useState('')
    const [toDo, setToDo] = React.useState([])
    const [editView, setEditView] = React.useState(false) 
    
    const create = event => {
        event.preventDefault()
        
        if(!task)
        {
            return;  
        }
        if(editView)
        {
            const newResult = toDo.map(el => {
                if(editView === el.id)
                {
                    el.task = task;
                }
                return el;
            })
            setToDo(newResult)
            setEditView(false)
            setTask('')
        }
        else
        {
            const data = {
                id: Date.now(),
                task: task,
                done: false
            }
            setToDo([...toDo, data]);
            setTask('');
        }
    }
    
    const reset = () => {
        setToDo([])
        setTask('')
    }
    
    const deleteToDo = id => {
        setToDo(toDo.filter( el => el.id !== id ))
    }
    
    const editToDo = task => {
        setTask(task.task)
        setEditView(task.id)
    }
    
    const undoToDo = () => {
        setTask('')
        setEditView(false)
    }
    
    const changeStatus = id => {
        const newResult = toDo.map(el => {
            if(el.id === id)
            {
                el.done = el.done ? false : true
            }
            return el;
        })
        setToDo(newResult)
    }
    
    return (
        <div className="center">
            <h1>Simple To Do List</h1>
            <form onSubmit={create}>
                <label className="mr-20" htmlFor="task">Tugas</label>
                <input 
                    type="text" 
                    name="task" 
                    id="task"
                    value={task}
                    onChange={event => setTask(event.target.value)}
                    autoFocus
                />
                <br /><br />
                <button type="submit">{editView ? "Simpan" : "Tambah"}</button>
                {
                    editView && 
                    <button onClick={undoToDo}>Batalkan Perubahan</button>
                }
            </form>
            
            <br /><br />
            
            {
                toDo.length >= 1 && 
                <button onClick={reset}>Reset Tugas</button>
            }
            <h4>Daftar Tugas</h4>
            
            <ul>
                {toDo.map(task => {
                    return (
                            <li key={task.id} className="mb-10">
                                <input 
                                    type="checkbox" 
                                    checked={task.done}
                                    name={task.id} 
                                    onChange={changeStatus.bind(this, task.id)}
                                />
                                <span className="mr-20">{task.task}</span>
                                {
                                editView !== task.id &&
                                <>
                                    <button 
                                        onClick={editToDo.bind(this, task)}>
                                        Edit
                                    </button>
                                    <button 
                                        onClick={deleteToDo.bind(this,task.id)}>
                                        Hapus
                                    </button>
                                </>
                                }
                            </li> 
                    )
                })} 
            </ul>
        </div>
    )
}

export default ToDo