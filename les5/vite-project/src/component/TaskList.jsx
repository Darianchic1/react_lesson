import TaskCard from "./TaskCard";
import {useState} from 'react'

function TaskList(){
    const [tasks, setTasks] = useState([
        {
            task: 'Slip',
            disc: 'always',
            status:'backlog'
        },
        {
            task: 'Eat',
            disc: 'always',
            status: 'In progress'
        }, 
        {
            task: 'Coding',
            disc: 'always',
            status: 'Well done'
        }
    ]);

    return(
        <ul>
            {tasks.map((el, index)=>(
                <TaskCard task={el.task} disc={el.disc} status={el.status} key={index}/>
            ))}
        </ul>
    )
}

export default TaskList