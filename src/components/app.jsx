import Component from "./Component";
import Stalas from "./stalas";


function App(props) {
    return (
        <>
        <Component per={props.per} name={"Petras"} surname={"Petrovicius"}></Component>
        <Stalas per={props.per} name={"Petras"} surname={"Petrovicius"}></Stalas>
        </>
        );
    }
    
        export default App;