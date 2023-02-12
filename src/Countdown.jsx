import {React,useState} from 'react'

function Countdown({item}) {
    const [second,setSecond]=useState();
    setInterval(()=>setSecond((60-new Date().getSeconds())+1),1000);
    var val=item.endtime;
			var curhours=new Date().getHours();
			var curminutes=new Date().getMinutes();
			var hours=val.slice(0,2)-curhours;
			var minutes=val.slice(3,5)-curminutes;
    return (<>
        {hours} {minutes} {second}
        </>
    )
}

export default Countdown
