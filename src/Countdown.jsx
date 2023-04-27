import {React,useState} from 'react'

function Countdown({item}) {
    const [second,setSecond]=useState();
    setInterval(()=>setSecond((60-new Date().getSeconds())+1),1000);
    var val=item.endtime;
    // console.log(val);
    // var temp=val.slice(0,2);
    // if (val.slice(0,2)>12)
        // val=item.endtime-12;
			// var curhours=new Date().getHours();
			// var curminutes=new Date().getMinutes();
			// var hours=val.slice(0,2)-curhours;
            // // if(hours>12)
            //     // hours=hours-12;
			// var minutes=val.slice(3,5)-curminutes;
            // console.log(hours);
            // Define the target time in hh:mm format
            
const targetTime = val;

// Get the current time in minutes since midnight
const now = new Date();
const currentMinutes = now.getHours() * 60 + now.getMinutes();

// Convert the target time to minutes since midnight
const [targetHours, targetMinutes] = targetTime.split(':');
const targetMinutesSinceMidnight = targetHours * 60 + Number(targetMinutes);

// Calculate the remaining time in minutes
let remainingTime = targetMinutesSinceMidnight - currentMinutes;

// Handle the case where the target time is earlier than the current time
if (remainingTime < 0) {
  remainingTime += 24 * 60;
}

// Convert the remaining time to hours and minutes
const hours = Math.floor(remainingTime / 60);
const minutes = remainingTime % 60;

// Print the remaining time
// console.log(`Remaining time: ${hours} hours, ${minutes} minutes`);


    return (<>
    <span>Remaining time</span><br />
        {hours} {minutes} {second}
        </>
    )
}

export default Countdown
