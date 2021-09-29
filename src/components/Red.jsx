import { useReducer } from "react";
import { buttonReducer } from "../Reducers/buttonReducer";
import { changeColor, changeFancyColor } from "../Actions";



export function Red() {

    const [button, buttonDispacher] = useReducer(buttonReducer, {
        click: "green",
        fancyClick: "green"
    });

    return (
        <div className="button-shelf">

            <button className="mygtukas" onClick={() => buttonDispacher(changeColor())} style={{color:button.click}}>Press Me!</button>
            <button className="mygtukas" onClick={() => buttonDispacher(changeFancyColor("#"+Math.floor(Math.random()*16777215).toString(16)))} style={{color:button.fancyClick}}>Press Me!</button>



        </div>
    )
}