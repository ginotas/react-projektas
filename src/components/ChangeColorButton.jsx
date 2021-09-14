import React from "react";
import Reg from "./Reg";


// A  this.props.clickToChangeColor(this.props.color)
// B   () => this.props.clickToChangeColor(this.props.color)

// A(argument)
// B()(argument)

// function A(argument) {}

// function B() {(
//  return A
// )}


class ChangeColorButton extends React.Component {


    render() {
        return (
        
            <button className="mygtukas" onClick={ () => this.props.clickToChangeColor(this.props.color)}>
                {this.props.color}
                <Reg regNumber={this.props.regNumber}></Reg>
                </button>
        );
    }
}
  
    
export default ChangeColorButton;