import { createContext, useContext, useMemo, useState } from "react";
import { Todo } from "../model/ToDo";
import { ToDoManager } from "../model/ToDoManager";
import { ToDoLocalStorage } from "../model/ToDoLocalStorage";

type todoContextValue = {

    manager:ToDoManager;
    toDos:Todo[]; 
    refresh:() => void;
}

const todoContext = createContext<todoContextValue | null>(null) ;

export const TodoProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
  
    const [manager] = useState(() => {
        const storage = new ToDoLocalStorage()
        return new ToDoManager(storage)
    })

    const [todoVersion,setTodoVersion] = useState(0)

    const refresh = () => {
        setTodoVersion(v => v+1)
    }

    const value:todoContextValue = useMemo(
        () => ({
            manager,
            toDos:manager.getTodo(),
            refresh
        }),
        [manager,todoVersion]
    )
    return (
        <todoContext.Provider value={value}>
            {children}
        </todoContext.Provider>
    )
};

export const useTodo = ():todoContextValue => {
    const ctx = useContext(todoContext);
    if(!ctx) throw new Error("error");
    return ctx;
}