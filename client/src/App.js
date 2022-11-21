import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { response } from 'express';


function App() {

  const [todo, setTodo] = useState("");

  const onchangetodo = (e) => {
    setTodo(e.target.value);
  }

  const submit = (e) => {

    let body = {
      todo: todo
    }


    axios.post("/api/todo/submit", body).then((res) => {
       if (res.data.sucess) {
          console.log("성공")
       } 
    })
  }

  return (
    <div className="App">
        <div className='container'>
              <div className='container-todo'>
                  <div className='title'>
                      <span>To Do List</span>
                  </div>
                  <div className='content'>
                      <input type="text" onChange={(e) => onchangetodo(e) }></input>
                  </div>
                  <div className='button'>
                      <button onClick={(e) => submit(e)}>등록</button>
                  </div>

              </div>

        </div>
    </div>
  );
}

export default App;
