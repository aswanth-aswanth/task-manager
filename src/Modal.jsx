import React, { useEffect, useState } from "react";

function Modal({ view, todo,setView, setTodo, setTitle3, title3 }) {
  const [title2, setTitle2] = useState("");
  const [description2, setDescription2] = useState("");
  return (
    <>
      {view ? (
       
        <div className="modal">
          <input
            type="text"
            className="modalinp1"
            placeholder="Title"
            id="title"
       
            // value={title2}
            onChange={(e) => {
              setTitle2(e.target.value);
            }}
          />
                <textarea
            name=""
            className="description"
            cols="30"
            rows="10"
            placeholder="Description"
            // value={description2}
            onChange={(e) => {
              setDescription2(e.target.value);
            }}
          ></textarea>
          <label className="lbl1">
            from : 
            <input className="modalinp2" id='starttime' type="time" />
          </label>
          <select name="" id="select1">
            <option value="am">am</option>
            <option value="pm">pm</option>
          </select>
          <label className="lbl2">
            to : 
            <input className="modalinp3" id='endtime' type="time" />
          </label>
          <select name="" id="select2">
            <option value="am">am</option>
            <option value="am">pm</option>
          </select>
          <label className="lb3">
          <input type="checkbox" id="main"/>Main Task</label>
          <button className="setalarm">Set Alarm</button>
          <button
            onClick={() => {
              setTodo([
                ...todo,
                {
                  title: title2,
                  description: description2,
                  starttime:document.getElementById('starttime').value,
                  start: document.getElementById("select1").value,
                  endtime:document.getElementById('endtime').value,
                  end: document.getElementById("select2").value,
                  main:document.getElementById('main').checked
                },
              ]);
              setView(!view)
             document.getElementsByClassName('modalinp1')[0].value='';
             document.getElementsByClassName('description')[0].value='';
             document.getElementById('starttime').value='';
               document.getElementById("select1").value='';
              document.getElementById('endtime').value='';
             document.getElementById("select2").value='';
            document.getElementById('main').checked=false;
            // },
            }}
          className="ok" >
            ok
          </button>
   
          <button onClick={()=>setView(!view)} className="cancel">cancel</button>
        </div>
    
      ) : (
      ""
      )
     
      }
    </>
  );
}

export default Modal;
