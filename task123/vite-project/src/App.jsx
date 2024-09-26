import { useState } from 'react'
import Greeting from './Greeting/Greeting.jsx';
import TodoItem from './TodoItems/TodoItem.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([
    'Посадить дерево',
    'Построить дом',
    'Вырастить сына',
 ]);

  return (
    <>
    <div>
         <Greeting />
    </div>
    <button onClick={() => setCount((count) => count + 1)}>
      Count is {count}
    </button>
    <div>
      <h2>Список задач:</h2>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </div>
    </>
  )
}

export default App
