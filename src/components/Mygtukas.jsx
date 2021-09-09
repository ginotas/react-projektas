// perziureti nuo ~2val. 


import React from "react";
import CountDisplay from "./CountDisplay";

class Mygtukas extends React.Component {

    constructor() {
        super();
        this.state = {counter: 0};

    }

    activateLasers (e) {

        e.preventDefault();
        e.stopPropagation();
        
    //wronmg
        //this.setState({
            //counter: this.state.counter + 1,
          //});
// correct
          this.setState((state, props) => ({counter: state.counter + props.amount}));
    
    }


    valio (e) {
        console.log(`valio`);
    }

    componentDidMount() {
   /*    
document.querySelector("#root").
addEventListener("click", e => {
    console.log("valiooooo");
    
})
*/
    }
  
    componentWillUnmount() {
        
    }

    render() {
        return (
        <div onClick={(e) => this.valio(e)}>
            <a href="#" className="container" onClick={(e) => this.activateLasers(e)}>
                <div className="submit-feedback">{this.props.tekstas}</div>
            </a>
            <CountDisplay digit={this.state.counter}></CountDisplay>
          </div>
        );
    }
}
  
    
export default Mygtukas;