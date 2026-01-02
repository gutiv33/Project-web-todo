import type { Dispatch, SetStateAction } from 'react';
import './Navbar.css'

export type Panel = "NONE" |"ADD" | "DELETE" |"EDIT"|"DO";//|"HOME"

type NavbarProps = {
  activePanel: Panel
  setActivePanel:Dispatch<SetStateAction<Panel>>
}
 
export const Navbar:React.FC<NavbarProps> = ({
    
  setActivePanel,
 
}) => {

    return ( 
        <header className='head'>
            <div className='container'>
            <h2>TODO LIST</h2>    
            <nav style={{margin : "20px 0",display:"flex",gap:"12px"}} >

              {/* <button onClick={() => setActivePanel("HOME")} className='button-home'>Home</button>              */}
              <button onClick={() => setActivePanel("ADD")} className='button-add'> + </button>
              <button onClick={() => setActivePanel("DELETE")} className='button-delete'> - </button>
              <button onClick={() => setActivePanel("EDIT")} className='button-edit'> Edit </button> 
              <button onClick={() => setActivePanel("DO")} className='button-do'>Done</button>  
              
            </nav> 
            </div>
       
        </header>
        
           
    )
}

