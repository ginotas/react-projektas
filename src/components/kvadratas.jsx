import Bebras from "./bebras";

// KOMPONENTAS

function Kvadratas(props) {
    if (props.bebras == "juodasis") {
    return (
        <div className="kvadratas br">
        <b><Bebras bebras={props.bebras}/></b>
        </div>
        );
    } return (
        <div className="kvadratas">
        <Bebras bebras={props.bebras}/>
        </div>
        );
    }
    
        export default Kvadratas;