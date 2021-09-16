

import React from "react";
import SmallCow from "./SmallAnimal";
import SmallSheep from "./SmallSheep";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            cows: [],
            cowInput: "",
            sheeps: [],
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

    addSheep = () => {
        const sheep = {color: this.state.cowInput};
        const sheeps = this.state.sheeps.slice();
        sheeps.push(sheep);

        this.setState({
            sheeps: sheeps
        })
        localStorage.setItem('allsheeps', JSON.stringify(sheeps));
    }

    cowInputHandler = (e) => {
        this.setState ({
            cowInput: e.target.value,
        });
    }

    componentDidMount() {
        const cows = JSON.parse(localStorage.getItem('allcows'));
        const sheeps = JSON.parse(localStorage.getItem('allsheeps'));
        if (null === cows) {
            return;
        } else if (null === sheeps) {
            return;
        }
        this.setState({
            cows: cows,
            sheeps: sheeps,
        });
    }
   

render () {
    return (
        < >
                 {this.state.cows.map((b, i) => <SmallCow key={i} color={b.color} /> )}
                 {this.state.sheeps.map((b, i) => <SmallSheep key={i} color={b.color} /> )}
            <div>
                <input type="text" value={this.state.cowInput} onChange={this.cowInputHandler} />
                <button className="inputbutonas" onClick={this.addCow}>ADD COW</button>
                <button className="inputbutonas" onClick={this.addSheep}>ADD SHEEP</button>
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