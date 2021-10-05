import { useRef, useState, useEffect } from "react";




function App() {

    const counter = useRef(0);
    const crazyRef = useRef();
    const [turboCounter, setTurboCounter] = useState(0);

    const clicker = () => {
        counter.current++;
        console.log("kaunteris: ", counter.current)
    }

    const turboClicker = () => {
        setTurboCounter(turboCounter + 1);
    }

    useEffect(() => {
        console.log(crazyRef.current); 
        crazyRef.current.style.fontSize = "50px";
        //
        document.querySelector(".crazy").style.color = "blue";
        document.querySelector(".crazy").innerHTML = "jap jap!"

      }, []);

    return (
        <>
        <h1>REF: {counter.current}</h1>
        <h1>STATE: {turboCounter}</h1>
        <button onClick={clicker}>REF: Ach ja ja!</button>
        <button onClick={turboClicker}>STATE: Ach ja ja!</button>

        <div ref={crazyRef} className="crazy">crazy</div>
      
       
        </>
        );
    }
    
        export default App;