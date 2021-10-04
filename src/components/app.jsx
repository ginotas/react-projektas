import Field from "./Field";
import { useState } from "react";
import { ThemeContext, ThemeSelect } from "../Providers";

const letters = ["L", "a", "b", "a", "s"];

 const theme = 
    [
    
        {
        color: "red",
        border: "2px solid red"
    },
    {
        color: "green",
        border: "2px solid green"
    },
    {
        color: "blue",
        border: "2px solid blue"
    }

    ]
;



function App() {


    const [style, setStyle] = useState();

    const changeTheme = t => {
        setStyle(t);
    }



    return (
        <>
        <ThemeContext.Provider value={theme} >
        <ThemeSelect.Provider value={style}>  
       <Field letters={letters}></Field>
       <button onClick={() => changeTheme(0)}>Theme 1</button>
       <button onClick={() => changeTheme(1)}>Theme 2</button>
       <button onClick={() => changeTheme(2)}>Theme 3</button>
       </ThemeSelect.Provider>
       </ThemeContext.Provider>
        </>
        );
    }
    
        export default App;