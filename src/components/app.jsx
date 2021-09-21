import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {

useEffect(() => {
    console.log("start");

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
    console.log(response.data);
  });
}, []);


    return (
        <>
            labas
       
        </>
        );
    }
    
        export default App;

        /* 
        
        isrenderinti todos ND
        
        
        */