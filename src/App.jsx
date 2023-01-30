import { useState } from "react";
import Maintasks_Session from './Maintasks_session'
import Tasks_Session from './Tasks_session.jsx'
function App(){
  const [title3,setTitle3]=useState([]);
  return(
    <>
    <Maintasks_Session title3={title3}/>
    <Tasks_Session setTitle3={setTitle3} title3={title3}/>
    </>
  )
}
export default App;