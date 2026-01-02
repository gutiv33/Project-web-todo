export class Todo {

    id:number
    text:string
    dueDate:string
    private Done:boolean

    constructor(id:number,text:string,dueDate:string,isDone:boolean) {
        this.id = id;
        this.text = text;
        this.dueDate = dueDate;
        this.Done = isDone;
    }

    setStatus(isDone :boolean) {
        this.Done = isDone
    }

    isDone():boolean {
        return this.Done
    }
}