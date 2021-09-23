import React, {useEffect, useState} from "react";
import axios from "axios";
import Todo from "./todo";

function App() {

    const [todos, setTodos] = useState([]);

useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
    setTodos(response.data)
  });
}, []);

    const sniuriukasTodui = (id) => {
        const todosCopy = todos.slice();
        for (let i=0; i < todosCopy.length; i++) {
            if (id === todosCopy[i].id) {
                todosCopy[i].completed = !todosCopy[i].completed;
                break
            }
        }
        setTodos(todosCopy);
    }

    return (
        <div className="todo-container">
                {todos.map((todo) => (<Todo key={todo.id} data={todo} sniuriukas={sniuriukasTodui}></Todo>))}
        </div>
       
        );
    }
    
        export default App;

    