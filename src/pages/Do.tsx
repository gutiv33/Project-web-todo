import { Todo } from "../model/ToDo";

type Props = {
  listTodo: Todo[];
  onToggleDone: (id: number) => void;
};

export const ListToDo: React.FC<Props> = ({ listTodo, onToggleDone }) => {
  return (

  <div> 
    <ul style={{marginTop:'100px'}}>
       <h3 className="text">DONE / ISN ' T DONE</h3>
      {listTodo.map(todo => (
        <li key={todo.id}
        style={{display:"flex"}}>
          <input
            type="checkbox"
            checked={todo.isDone()}
            onChange={() => onToggleDone(todo.id)}
          />

          <span
            style={{
              textDecoration: todo.isDone() ? "line-through" : "none",
              marginLeft: "8px",
              fontSize:'20px' ,
              fontWeight:'bold'
            }}
          >
            {todo.text }  -   {todo.dueDate}
          </span>

           
        </li>
      ))}
    </ul>

  </div>   
  );
};