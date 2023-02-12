import { useState } from "react";
import Maintasks_Session from './Maintasks_session'
import Tasks_Session from './Tasks_session.jsx'
function App(){
  const [title3,setTitle3]=useState([]);
  const [todo,setTodo]=useState([{
    title:'',
    description:'',
    starttime:'',
    start:'',
    endtime:'',
    end:'',
    main:''
}]);
  return(
    <>
    <Maintasks_Session title3={title3} todo={todo}/>
    <Tasks_Session setTitle3={setTitle3} title3={title3} todo={todo} setTodo={setTodo}/>
    </>
  )
}
export default App;