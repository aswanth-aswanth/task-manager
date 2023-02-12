import React, { useEffect, useState } from "react";

function Modal({ view, todo, setTodo, setTitle3, title3 }) {
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
          <label>
            from
            <input className="modalinp1" id='starttime' type="time" />
          </label>
          <select name="" id="select1">
            <option value="Am">Am</option>
            <option value="Pm">Pm</option>
          </select>
          <label>
            to
            <input className="modalinp1" id='endtime' type="time" />
          </label>
          <select name="" id="select2">
            <option value="Am">Am</option>
            <option value="Pm">Pm</option>
          </select>
          <textarea
            name=""
            className="description"
            cols="30"
            rows="10"
            // value={description2}
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
                  main:document.getElementById('main').checked
                },
              ]);
             document.getElementsByClassName('modalinp1')[0].value='';
             document.getElementsByClassName('description')[0].value='';
             document.getElementById('starttime').value='';
               document.getElementById("select1").value='';
              document.getElementById('endtime').value='';
             document.getElementById("select2").value='';
            document.getElementById('main').checked=false;
            // },
            }}
          >
            ok
          </button>
          <label htmlFor="">
          <input type="checkbox" id="main"/>Main Task</label>
          <button>cancel</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Modal;
