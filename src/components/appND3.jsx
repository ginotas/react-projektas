// import Mygtukas from "./Mygtukas";


// const data = [["spausk", 1], ["myk", 10], ["spaudinek", 100], ["klikink", 1000]];

import React from "react";



class App extends React.Component {

    constructor() {
        super();
        this.state = {
            bg: "green",
            bgIn: "",
            size: 700,
            sizeIn: "",
            shapeSquare: false,
        };
    }

   

    inChangeColor = (e) => {
        this.setState ({
            bgIn: e.target.value,
            
        });
    }

    doColor = () => {
        this.setState(state => ({bg: state.bgIn}));
    }

    inChangeSize = (e) => {
        this.setState ({
            sizeIn: e.target.value,
            
        });
    }

    doSize = () => {
        this.setState(state => ({size: state.sizeIn}));
    }

    inChangeShape = (e) => {
        this.setState(state => ({shapeSquare: (!state.shapeSquare)}));
            
        
    }


render () {
    return (
        <div className="rutulys" style={{
            backgroundColor: this.state.bg, 
            width: this.state.size +"px",
            height: this.state.size +"px",
            borderRadius: this.state.shapeSquare ? "0%" : "50%"

            }}>
            <div>
                <input type="text" value={this.state.bgIn} onChange={this.inChangeColor} />
                <button className="inputbutonas" onClick={this.doColor}>change color</button>
            </div>
            <div>
                <input type="text" value={this.state.sizeIn} onChange={this.inChangeSize} />
                <button className="inputbutonas" onClick={this.doSize}>change size</button>
            </div>
            <div>
                <input type="checkbox"  onChange={this.inChangeShape} checked={this.state.shapeSquare}/>
                <label>change shape</label>
            </div>
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