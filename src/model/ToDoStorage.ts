import { Todo } from "./ToDo";
export interface ToDoStorage {
    saveToDo(todo:Todo[]):void;
    loadToDo():Todo[];
}