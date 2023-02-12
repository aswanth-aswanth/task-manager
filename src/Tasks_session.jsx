import { useEffect, useState } from "react";
import Modal from './Modal.jsx';
import Countdown from './Countdown';
function Tasks_Session({setTitle3,title3,todo,setTodo}){
    
    useEffect(()=>{
    console.log(title3);
    },[title3])
    const [view,setView]=useState(false);
    return(
        <>
        <div className="tasks">
            <p className="tasks_p1">Tasks</p>
            <p className="tasks_p2">See all</p>
            <div className="tasks_div1">
                {todo.length!==1&&todo.map((item,index)=>{
            
                return(
                <div key={index} className="tasks_div1_div1">
                    <p className="tasks_div1_div1_p1">{item.starttime} {item.endtime}</p>
                    <p className="tasks_div1_div1_p2">{item.title}</p>
                    <p className="tasks_div1_div1_p3">{index===0?'':<Countdown item={item}/>}</p>
                </div>
                )})}
                
                <button className="tasks_div1_btn1" onClick={()=>setView(!view)}>+</button>
                <Modal view={view} todo={todo} setTodo={setTodo} setTitle3={setTitle3} title3={title3}/>
            </div>
        </div>
        </>
    )
}
export default Tasks_Session;