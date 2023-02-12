import { useState } from "react";
function Maintasks_Session({title3,todo}){
    const today=new Date();
    const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    const months=['january','february','march','april','may','june','july','august','september','october','november','december'];
    return(
        <>
        <div className="main-task">
            <p className="main-task_p1">{today.getDate()} {months[today.getMonth()]} {today.getFullYear()}</p>
            <p className="main-task_p2">1 of 3 completed</p>
            <p className="main-task_p3">Main tasks</p>
            <div className="main-task_div1">
                {/* {title3.map((item,index)=>{ */}
                {console.log(todo)}
                {todo.map((item,index)=>{
                    console.log(item.main);
                    {if(item.main)
                        return <div style={{border:'1px solid gray',width:'80px'}} key={index}>{item.title}</div>
                    }
                    //   {item.main?return <div style={{border:'1px solid gray',width:'80px'}} key={index}>{item.title}</div>:''}
                })}
            </div>
        </div>
        </>
    )
}
export default Maintasks_Session;