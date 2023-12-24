import { useContext,createContext } from "react";

export const TodoContext= createContext({
    todos:[
        {
            id:1,
            todo:"Do exercise",
            completed:false
        },{
            id:2,
            todo:"Do exercise",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    removeTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleTodo:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider;