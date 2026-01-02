import { Todo } from "./ToDo";
import { ToDoLocalStorage } from "./ToDoLocalStorage";

export class ToDoManager {

    private listTodo:Todo[] = [];
    private storage:ToDoLocalStorage;

    constructor (storage:ToDoLocalStorage) {
        this.storage = storage
        this.listTodo = storage.loadToDo()
    }
    
    addTodo(text:string,dueDate:string,isDone = false) {

        const id = this.listTodo.length ? this.listTodo[this.listTodo.length - 1].id + 1 : 1 ;
        const newTodo = new Todo(id,text,dueDate,isDone)

        this.listTodo.push(newTodo)
        this.storage.saveToDo(this.listTodo)

    }

    deleteTodo(id:number) {

        this.listTodo = this.listTodo.filter(i => i.id !== id) 
        this.listTodo.sort((a,b) => a.id - b.id).forEach((todo,index) => {
            todo.id = index + 1;
        })
        this.storage.saveToDo(this.listTodo)
    }

    toggleDone(id:number) {

        const checkId = this.listTodo.find(i => i.id == id)
        checkId?.setStatus(!checkId.isDone())
        this.storage.saveToDo(this.listTodo)
    }

    getTodo():Todo[] {
        return this.listTodo
    }

    editDueDate(id:number,dueDate:string) {

        const checkId = this.listTodo.find(i => i.id === id && i.isDone() == false)
        if(!checkId) return;
        
        checkId.dueDate = dueDate

        this.storage.saveToDo(this.listTodo)
    }

    editText(id:number,text:string) {

        const checkId = this.listTodo.find(i => i.id === id && i.isDone() == false)
        if(!checkId) return;

        checkId.text = text
        this.storage.saveToDo(this.listTodo)
    }

    IsAmostDue(dueDate:string):boolean {
        const due = new Date(dueDate)
        const today = new Date()

        due.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
       
        return due === today

    }
} 


