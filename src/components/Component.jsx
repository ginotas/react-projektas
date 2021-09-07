//import person from "../data/person";

// KOMPONENTAS

function Component(props) {
return (
    <>
    <h1>Hello, barsukeli!</h1>
    <small>{props.name} {props.surname} per {props.per}</small>
    </>
    );
}

    export default Component;