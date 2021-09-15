// import Mygtukas from "./Mygtukas";


// const data = [["spausk", 1], ["myk", 10], ["spaudinek", 100], ["klikink", 1000]];

import React from "react";
import ChangeColorButton from "./ChangeColorButton";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            bg: "green",
            in: "aaa"
        };
    }

    changeColorG = () => {
        this.setState(
            {bg: "green"},
        );
    }

    changeColorR = () => {
        this.setState(
            {bg: "red"},
        );
    }

    changeColorB = () => {
        this.setState(
            {bg: "blue"},
        );
    }

    changeColor = (color) => {
        this.setState(
            {
                bg: color,
                //in: color,
            },
        );
    }

    inChange = (e) => {
        this.setState ({
            in: e.target.value,
            //bg: e.target.value
        });
    }

    doColor = () => {
        this.setState(state => ({bg: state.in}));
    }

render () {
    return (
        <div className="rutulys" style={{backgroundColor: this.state.bg}}>
            
            <ChangeColorButton regNumber={23} color={"green"} clickToChangeColor={this.changeColor}></ChangeColorButton>
            <ChangeColorButton regNumber={69} color={"red"} clickToChangeColor={this.changeColor}></ChangeColorButton>
            <ChangeColorButton regNumber={77} color={"blue"} clickToChangeColor={this.changeColor}></ChangeColorButton>
            
            <input type="text" value={this.state.in} onChange={this.inChange} />
            <button className="inputbutonas" onClick={this.doColor}>change color</button>
        </div>
      
        );
    }
}  
        export default App;


        /*
        
        ND:

        Padaryti tris kontroliuojamus inputus du text tipo ir vienas checkbox. 
        Vienas inputas turi keisti apskritimo spalvą, kitas apskritimo skersmenį ir trečias- kai pažymėtas turi pakeisti apskritimą į kvadratą
    
        
        */