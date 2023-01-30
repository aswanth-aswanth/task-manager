import { useEffect, useState } from "react";
import Modal from './Modal.jsx';
function Tasks_Session({setTitle3,title3}){
    const [todo,setTodo]=useState([{
        title:'',
        description:'',
        starttime:'',
        start:'',
        endtime:'',
        end:''
    }]);
    useEffect(()=>{
    console.log(title3);
    },[title3])
    const [view,setView]=useState(false);
    const [second,setSecond]=useState();
    // const [minute,setMinute]=useState();
    // let today=new Date();
   setInterval(()=>setSecond((60-new Date().getSeconds())+1),1000);
//    setInterval(()=>setMinute(60-(new Date().getMinutes())),1000);
    let minute=60-(new Date().getMinutes());
// =>setInterval(()=>{
//     let seconds=new Date().getSeconds();
//     return seconds;},1000))
    // console.log(todo);
    return(
        <>
        <div className="tasks">
            <p className="tasks_p1">Tasks</p>
            <p className="tasks_p2">See all</p>
            <div className="tasks_div1">
                {todo.map((item)=>{
                return(
                <div key={item.id} className="tasks_div1_div1">
                    <p className="tasks_div1_div1_p1">{item.starttime} {item.endtime}</p>
                    <p className="tasks_div1_div1_p2">{item.title}</p>
                    <p className="tasks_div1_div1_p2">{minute} {second}</p>
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