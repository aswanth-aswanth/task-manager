import { useState } from "react";
function Maintasks_Session({title3,todo}){
    const today=new Date();
    const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    const months=['january','february','march','april','may','june','july','august','september','october','november','december'];
    const [expand,setExpand]=useState(false);
    // function Changeme(){
    //     document.getElementById["main-task-id"].Style.height='auto';
    // }
    // if(expand){
    //     Changeme();
    // }
    return(
        <>

        <div className="main-task" id="main-task-id">
        
            <p className="main-task_p1">{today.getDate()} {months[today.getMonth()]} {today.getFullYear()}</p>
            {/* <p className="main-task_p2">1 of 3 completed</p> */}
            <p className="main-task_p3">Main tasks</p>
            <div className="main-task_div1">
                {/* {title3.map((item,index)=>{ */}
                {console.log(todo)}
                {todo.map((item,index)=>{
                    console.log(item.main);
                    console.log(index);
                    var clr;
                    if(index%2===0){
                        clr='#4C4C4C';
                    }
                    else if(index%3===0){
                        clr='#00E0FF';
                    }
                    else{
                        clr='#F6510A';
                    }
                     console.log(clr);
                    {if(item.main)
                        return(<> <div style={{
                            border:'0px',
                            // width:'100px',
                            height:'100px',
                            borderRadius:'10px',
                            background:clr,
                            color:'white',
                            fontSize:'26px',
                            // display:'inline-block',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            boxShadow:' 4px 8px 30px rgba(76, 39, 89, 0.5)',
                            // verticalAlign: 'middle',
                            margin:'17px 25px',
                            paddingLeft:'10px',
                            paddingRight:'10px',
                            paddingTop:'8px',
                            paddingBottom:'8px'
                        }} key={index} onClick={()=>setExpand(!expand)} className="divexpand">{item.title}</div>
                        {expand?<>   <div className="expand" >
                        {item.description}
                        
                    </div></>:<></>}
                     
                    </>)
                    }
                    //   {item.main?return <div style={{border:'1px solid gray',width:'80px'}} key={index}>{item.title}</div>:''}
                   
                })}
              
            </div>
        </div>

        </>
    )
}
export default Maintasks_Session;