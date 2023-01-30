import React, { useEffect, useState } from "react";

function Modal({ view, todo, setTodo, setTitle3, title3 }) {
  const [title2, setTitle2] = useState("");
  const [description2, setDescription2] = useState("");
//   console.log(todo);
  //    let select2=document.getElementById('select2').value;
  //    console.log(document.getElementById('select2'));
  //    let select1=document.getElementById('select1').value;
  //    useEffect(()=>{
  //      setTodo([{
  //         title:title2,
  //         description:description2,
  //         start:'',
  //         end:''
  //     }])
  //    },[title2,description2]);
  // function handleclick(){

  // }
  return (
    <>
      {view ? (
        <div className="modal">
          <input
            type="text"
            className="modalinp1"
            placeholder="Title"
            value={title2}
            onChange={(e) => {
              setTitle2(e.target.value);
            }}
          />
          <label>
            from
            <input className="modalinp1" id='starttime' type="number" />
          </label>
          <select name="" id="select1">
            <option value="Am">Am</option>
            <option value="Pm">Pm</option>
          </select>
          <label>
            to
            <input className="modalinp1" id='endtime' type="number" />
          </label>
          <select name="" id="select2">
            <option value="Am">Am</option>
            <option value="Pm">Pm</option>
          </select>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={description2}
            onChange={(e) => {
              setDescription2(e.target.value);
            }}
          ></textarea>
          <button>Set Alarm</button>
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
                },
              ]);
            }}
          >
            ok
          </button>
          <button>cancel</button>
          <button onClick={()=>{
            setTitle3([...title3,title2])
          }}>Add to main</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Modal;
