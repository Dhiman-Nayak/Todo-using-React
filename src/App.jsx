import { useState ,useEffect} from 'react'
import './App.css'
import { TodoProvider } from './context'
import {TodoForm,TodoItem} from './components/index.js'

function App() {
  const [todos, settodos] = useState([])

  const addTodo=(todo)=>{
    settodos((prev)=>[...prev,{id:prev.length+1,todo:todo,completed:false}])
  }
  const updateTodo=(id,todo)=>{
    settodos((prev)=>prev.map((p)=>(p.id===id ?todo:p)))
  }
  const removeTodo=(id)=>{
    settodos((prev)=>prev.filter((todo)=>todo.id !==id))
  }
  const toggleTodo=(id)=>{
    settodos((prev)=>prev.map((p)=>p.id===id?{...p,completed:!p.completed}:p))
  }

  useEffect(() => {
    const todos= JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      settodos(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))  
  
  }, [todos])
  
  

  return (
    <TodoProvider value={{todos,addTodo,removeTodo,toggleTodo,updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
