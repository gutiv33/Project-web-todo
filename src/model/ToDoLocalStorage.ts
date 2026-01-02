import { Todo } from "./ToDo";
import type { ToDoStorage } from "./ToDoStorage";

const Todo_Key = "List_Todo";

export class ToDoLocalStorage implements ToDoStorage {

    saveToDo(todo:Todo[]) {

        const loadListTodo = todo.map(i => ({

            id:i.id,
            text:i.text,
            dueDate:i.dueDate,
            isDone:i.isDone()

        }))
        
        localStorage.setItem(Todo_Key,JSON.stringify(loadListTodo))
        
    }

    loadToDo(): Todo[] {

        const raw = localStorage.getItem(Todo_Key)
        if(!raw) return []

        const parsed = JSON.parse(raw) as {

            id:number,
            text:string,
            dueDate:string,
            isDone:boolean

        }[]

        const ListTodo = parsed.map(i => new Todo(i.id,i.text,i.dueDate,i.isDone))
        
        return ListTodo
        
    }

}