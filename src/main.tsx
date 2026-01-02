import { createRoot } from 'react-dom/client'
import { TodoProvider } from './contexts/TodoContext.tsx'
import App from './App.tsx'

 
createRoot(document.getElementById('root')!).render(

<TodoProvider>
     <App/>
</TodoProvider>
  

)
