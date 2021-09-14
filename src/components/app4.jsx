// import Mygtukas from "./Mygtukas";


// const data = [["spausk", 1], ["myk", 10], ["spaudinek", 100], ["klikink", 1000]];

import React from "react";
import ChangeColorButton from "./ChangeColorButton";


class App extends React.Component {

    constructor() {
        super();
        this.state = {bg: "green"};
    }

    changeColor = () => {
         
          this.setState(state => {
              let color;
              if (state.bg == "green") {
                  color = "red";
              } else if (state.bg == "red") {
                  color = "green";
              }
              return(
              {bg: color}
              )
          });
    }

render () {
    return (
        <div className="rutulys" style={{backgroundColor: this.state.bg}}>
            <ChangeColorButton clickToChangeColor={this.changeColor}></ChangeColorButton>
        </div>
      
        );
    }
}  
        export default App;


        /*
        
        ND:

        Namuose tas pats apskritimas ir trys mygtukai. 
        Kiekvienas mygtukas atskiras komponentas ir atskira spalva nudažomas apskritimas
        
        Kokį mygtuką paspausime toks bus apskritimas
    
        
        */