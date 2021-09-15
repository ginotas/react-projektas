

import React from "react";
import SmallCow from "./SmallCow";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            cows: [],
            cowInput: "",
            
        };
    }

    addCow = () => {
        const cow = {color: this.state.cowInput};
        const cows = this.state.cows.slice();
        cows.push(cow);

        this.setState({
            cows: cows
        })
        localStorage.setItem('allcows', JSON.stringify(cows));
    }

    cowInputHandler = (e) => {
        this.setState ({
            cowInput: e.target.value,
        });
    }

    componentDidMount() {
        const cows = JSON.parse(localStorage.getItem('allcows'));
        if (null === cows) {
            return;
        }
        this.setState({
            cows: cows
        });
    }
   

render () {
    return (
        < >
                 {this.state.cows.map((b, i) => <SmallCow key={i} color={b.color} /> )}
            <div>
                <input type="text" value={this.state.cowInput} onChange={this.cowInputHandler} />
                <button className="inputbutonas" onClick={this.addCow}>ADD COW</button>
            </div>
        </>
      
        );
    }
}  
        export default App;


        /*
        
        nd3:

        Reikia padaryti kad būtų du mygtukai. Vienas kuria apskritimus (karves), kitas kuria keturkampius (avinus). Viskas viename masyve ir draugauja su localStorage
        Spalvos inputas vienas ir taspats abiem mygtukam
        
        
        */