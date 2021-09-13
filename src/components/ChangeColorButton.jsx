import React from "react";


class ChangeColorButton extends React.Component {


    render() {
        return (
        
            <button className="mygtukas" onClick={this.props.clickToChangeColor}>spausk</button>
        );
    }
}
  
    
export default ChangeColorButton;