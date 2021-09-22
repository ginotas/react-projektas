import React, {useEffect, useState} from "react";
import axios from "axios";
import Todo from "./todo";

function App() {

    const [todos, setTodos] = useState([]);

useEffect(() => {
    console.log("start");

    axios.get('https://in3.dev/knygos/types/')
    .then(function (response) {
    console.log(response.data);
    setTodos(response.data)
  });
}, []);


    return (
        <div className="todo-container">
                {todos.map((todo) => (<Todo key={todo.id} data={todo}></Todo>))}
        </div>
       
        );
    }
    
        export default App;

        /* 
        
        isrenderinti todos ND
        
        
        */