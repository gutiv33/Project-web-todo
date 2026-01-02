import { useState } from 'react'
// import './App.css'
import { useTodo } from './contexts/TodoContext';
import { AddTodo } from './pages/AddTodo';
import { DeleteListTodo } from './pages/DeleteTodo';
import { EditToDo } from './pages/Edit';
import {Navbar} from './components/Navbar'
import { ListToDo } from './pages/Do';
// import Home from './pages/Home';


type Panel =  "NONE"|"ADD" | "DELETE" |"EDIT" |"DO";//|"HOME"

const App:React.FC = () => {

    const [activePanel,setActivePanel] = useState<Panel>("NONE");
    const {manager,toDos,refresh} = useTodo();
    // {activePanel === "HOME" && <Home/>}

    // console.log("toDos in DO panel:", toDos);
    return (
      
      
      <div>
        
        <Navbar
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        />

        <main style={{padding:"24px"}}>
          {/* <h2>TODO LIST</h2> */}

          {activePanel === "DO" && (
            <ListToDo
              listTodo = {toDos}
              onToggleDone = {(id) => {
                manager.toggleDone(id);
                refresh();
                

                setActivePanel("NONE")
              }}
              />
          )}
          
          {activePanel === "ADD" && ( 
            <AddTodo 
              onSubmit={() => setActivePanel("NONE")}
             />
          )}

          {activePanel === "DELETE" && (
            <DeleteListTodo
              listTodo={toDos}
              onSubmit={(id) => {
                manager.deleteTodo(id);
                refresh();
                setActivePanel("NONE")
              }}
              />
          )}

          {activePanel === "EDIT" && (
            <EditToDo
            listTodo={toDos}
            onSubmit1={(id,text) => {
              manager.editText(id,text)
              refresh();
              setActivePanel("NONE")
            }}
            
            onSubmit2={(id,dueDate) => {
              manager.editDueDate(id,dueDate)
              refresh();
              setActivePanel("NONE")
            }}
            
            />
          )}


         <div >
        <h2 style={{marginTop:'100px'}}>List Todo</h2>

           <ul>

              {toDos.map(t =>(

              <li key={t.id} >

                [{t.id}] {t.text} -{t.dueDate} ({t.isDone() ? "Done" : "Isn't Done" })

              </li>

            ))}

          </ul>
        
    </div>
          
          
        </main>
      </div>
    )
}

export default App


//  <div >
//         <h2 style={{marginTop:'100px'}}>List Todo</h2>

//           <ul>

//             {toDos.map(t =>(

//               <li key={t.id} >

//                 [{t.id}] {t.text} -{t.dueDate} ({t.isDone() ? "Done" : "Isn't Done" })

//               </li>

//             ))}

//           </ul>
        
//     </div>