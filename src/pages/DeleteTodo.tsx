import { Todo } from "../model/ToDo"
import './pages.css'

type DeleteToDoProps = {
    listTodo:Todo[];
    onSubmit:(id:number) => void;
    
}

export const DeleteListTodo:React.FC<DeleteToDoProps> = ({
    listTodo,onSubmit

}) => {
    return (
        <div>
            <h3 className="text"> DETELE TODO </h3>
                       
            <ul>
                {listTodo.map(item => (
                    <li
                    key={item.id}
                    style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}
                    >
                        <span style={{fontWeight:'bold',fontSize:'px'}}>{item.text }</span>  {/*จัดรูปแบบ ส่วนเล็กๆ ของข้อความหรือเนื้อหาที่อยู่ภายในบรรทัดเดียวกัน (Inline Element) โดยไม่มีการขึ้นบรรทัดใหม่ เหมือนกับแท็ก <div> แต่ <div></div> color:'#f763c6ff', */}
                        <button
                        onClick={()=> onSubmit(item.id)}
                        style={{cursor:"pointer",margin:'5px'}} /*,backgroundColor:'rgba(248, 81, 81, 1)',border:'while' */
                        >
                             🗑️
                        </button>
                    </li>    
                ))}
            </ul>
        </div>
    )
}
    

    