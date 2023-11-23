import { useContext, createContext } from "react";

export const ContextTodo = createContext({
    todos :[
        {
            id:1,
            todo: 'todo massage',
            completed:false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},
})

export const useTodo = () => {
    return useContext(ContextTodo);
}

export const TodoProvider = ContextTodo.Provider