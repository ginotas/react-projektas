// perziureti nuo ~2val. 


import React from "react";


class Bebras extends React.Component {

    constructor() {
        super();
        this.state = {date: new Date()};

    }

    tick() {
        this.setState( {date: new Date()} );
      }

    componentDidMount() {
        console.log("jau ", this.props.bebras);

        document.querySelector(".kvadratas").addEventListener("click",  
        () => {
            console.log("klyyk");
        })

        // this.timerID = setInterval( () => this.tick(),1000);

    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <span>
                {this.props.bebras}
                <hr></hr>
                {this.state.date.toLocaleTimeString()}
            </span>
             );
         }
    }






/*
function Bebras(props) {
    return (
       <span>{props.bebras}</span>
        );
    }
    
   */     
    
export default Bebras;