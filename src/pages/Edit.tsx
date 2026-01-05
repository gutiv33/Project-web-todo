import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Todo } from "../model/ToDo";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import './pages.css'


export const EditToDo: React.FC<{
  listTodo: Todo[],
  onSubmit1: (id: number, text: string) => void,
  onSubmit2: (id: number, dueDate: string) => void
}> = ({ listTodo, onSubmit1, onSubmit2 }) => {

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [newText, setNewText] = useState("");
  const [newDueDate, setNewDueDate] = useState<Date | null>(null);

  const selectedTodo = listTodo.find(t => t.id === selectedId);
  // const {manager,refresh} = useTodo();
  // manager.deleteTodo(todo.id);
  //               refresh();

  return (
    <div style={{marginTop:'100px'}}>
      <h3 className="text">EDIT TODO</h3>
      <ul>
        {listTodo.map(todo => (
          <li key={todo.id}
          style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}
          >
            
            <span style={{fontSize:'20px' ,fontWeight:'bold'}}>{todo.text} - Due Date: {todo.dueDate} </span> {/*Status: {todo.isDone() ? "Done":"Isn't done"}*/}
            <button onClick={() => setSelectedId(todo.id)} className="button-editp">EDIT</button>
          </li>
        ))}
      </ul>

      {selectedTodo && (
        <div>
          <div style={{marginTop: "50px"}}>
            <TextField 
              placeholder={selectedTodo.text} 
              value={newText} 
              onChange={e => setNewText(e.target.value)} 
              fullWidth
            />
            <button onClick={() => {
              if(newText) {
                onSubmit1(selectedTodo.id, newText);
                setNewText("");
                setSelectedId(null);
                
              }
              
            }}style={{ display:'block',margin: "20px auto "  }} >บันทึก Text</button>
          </div>

          <div >{/*style={{marginTop: "20px"}} */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
              label="Due date"
              value={newDueDate ? dayjs(newDueDate):null}
              onChange={(newValue) => setNewDueDate(newValue ? newValue.toDate():null)}
              slotProps={{ textField: { fullWidth: true } }}
            />
            </LocalizationProvider>
            <button onClick={() => {
              if(newDueDate) {
                onSubmit2(selectedTodo.id, dayjs(newDueDate).format("YYYY-MM-DD"));
                setNewDueDate(null);
                setSelectedId(null);
              }
            }} style={{ display:'block',margin: "20px auto " }}>บันทึก Due date</button>
          </div>
        </div>
      )}

       <h2 style={{marginTop:'100px'}}>List Todo</h2>
            <ul>

              {listTodo.map(t =>(

              <li key={t.id} >

                [{t.id}] {t.text} -{t.dueDate} ({t.isDone() ? "Done" : "Isn't Done" })

              </li>

            ))}

          </ul>
    </div>
  );
};




// import { useState } from "react";
// import { Todo } from "../model/ToDo";

// type EditToDoProps = {
//   listTodo: Todo[];
//   onSubmit1: (id: number, text: string) => void;
//   onSubmit2: (id: number, dueDate: string) => void;
// };

// export const EditToDo: React.FC<EditToDoProps> = ({
//   listTodo,
//   onSubmit1,
//   onSubmit2,
// }) => {
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [newText, setNewText] = useState("");
//   const [newDueDate, setNewDueDate] = useState("");

//   const selectedTodo = listTodo.find((todo) => todo.id === selectedId);

//   return (
//     <div>
//       <h3>EDIT TODO</h3>

//       {/* ขั้นตอน 1: เลือก Todo */}
//       <ul>
//         {listTodo.map((item) => (
//           <li
//             key={item.id}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               marginBottom: "8px",
//             }}
//           >
//             <span>{item.text}</span>
//             <button onClick={() => setSelectedId(item.id)}>แก้ไข</button>
//           </li>
//         ))}
//       </ul>

//       {/* ขั้นตอน 2: แก้ไข Todo */}
//       {selectedTodo && (
//         <div style={{ marginTop: "16px" }}>
//           <h4>แก้ไข: {selectedTodo.text}</h4>

//           <div>
//             <label>
//               Text ใหม่:
//               <input
//                 type="text"
//                 value={newText}
//                 onChange={(e) => setNewText(e.target.value)}
//                 placeholder={selectedTodo.text}
//               />
//             </label>
//             <button
//               onClick={() => {
//                 if (newText) {
//                   onSubmit1(selectedTodo.id, newText);
//                   setNewText("");
//                   setSelectedId(null);
//                 }
//               }}
//             >
//               บันทึก Text
//             </button>
//           </div>

//           <div style={{ marginTop: "8px" }}>
//             <label>
//               Due date ใหม่:
//               <input
//                 type="date"
//                 value={newDueDate}
//                 onChange={(e) => setNewDueDate(e.target.value)}
//               />
//             </label>
//             <button
//               onClick={() => {
//                 if (newDueDate) {
//                   onSubmit2(selectedTodo.id, newDueDate);
//                   setNewDueDate("");
//                   setSelectedId(null);
//                 }
//               }}
//             >
//               บันทึก Due date
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };



// // import { useState } from "react";
// // import { Todo } from "../model/ToDo"

// // type EditToDoProps = {
// //     listTodo:Todo[];
// //     onSubmit1:(id:number,text:string) => void;
// //     onSubmit2:(id:number,dueDate:string) => void;
// // }

// // export const EditToDo: React.FC<EditToDoProps> = ({
// //     listTodo,onSubmit1,onSubmit2

// // }) => {
// //     const [id,setId] = useState<number|"">("")

// //     return (
// //         <div>
// //             <h3> EDIT TODO </h3>

// //             <ul>
// //                 {listTodo.map(item => (
// //                     <li
// //                     key={item.id}
// //                     style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}
// //                     >
// //                         <span>{item.text}</span>
// //                         <button
// //                         onClick={()=>onSubmit1()}
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     )
// // }