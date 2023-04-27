import { useEffect, useState } from "react";
import Modal from './Modal.jsx';
import Countdown from './Countdown';
function Tasks_Session({setTitle3,title3,todo,setTodo}){
    
    useEffect(()=>{
    console.log(title3);
    },[title3])
    const [view,setView]=useState(false);
    // if(view){
    //     Change1();
    // }
    // else{
    //     Change2();
    // }
    // function Change1(){
    //     document.getElementsByClassName("ss")[0].style.display="flex";
    // }
    // function Change2(){
    //     document.getElementsByClassName("ss")[0].style.display="none";
    // }
        // if (view){
        //     document.getElementsByClassName("ss")[0].style.display="flex";
        // }
        // else{
        // document.getElementsByClassName("ss")[0].style.display="none";
        // }
  
    return(
        <>
        <div className="tasks">
            <p className="tasks_p1">Tasks</p>
            <p className="tasks_p2">See all</p>
            <div className="tasks_div1">
                {todo.length!==1&&todo.map((item,index)=>{
                    // console.log(item.title.length);
                    if(item.title.length!=0){
                return(
                <div key={index} className="tasks_div1_div1">
                   <div className="jstfortime"> 
                        <p className="start">start</p>
                        <p className="end">end</p>
                        <br/>
                        <p className="starttime">{item.starttime}{item.start}</p>
                        <p className="endtime">{item.endtime}{item.end}</p>
                 
                    </div>
                    <p className="tasks_div1_div1_p2">{item.title}</p>
                   {/* <div className="dummywidth"> */}
                   <p className="tasks_div1_div1_p3">{index===0?'':<Countdown item={item}/>}</p>
                   {/* </div> */}
                   
                </div>
                )}})}
                
                <button className="tasks_div1_btn1" onClick={()=>{
                        setView(!view)
                        // document.body.classList.add('bodyblur');
                       
                }}>+</button>
            </div>
            <div className="ss" >
            <Modal view={view} setView={setView} todo={todo} setTodo={setTodo} setTitle3={setTitle3} title3={title3}/>
            </div>
        </div>
        </>
    )
}
export default Tasks_Session;