import { changeFancyColor } from "../Actions";
import { CHANGE_COLOR, CHANGE_FANCY_COLOR } from "../Constants/types";


export function buttonReducer(state, action) {

    const newState = {...state};   // pasidarom state kopija

    switch(action.type) {
        case CHANGE_COLOR: 
            if(state.click === "red") {
                newState.click = "green";
            }
            else {
                newState.click = "red";
            }
            
            newState.fancyClick = "#"+Math.floor(Math.random()*16777215).toString(16);
            break;

        case CHANGE_FANCY_COLOR:
            
            newState.fancyClick = action.payload;
            break;
    }

    return newState;

}