

import React, {useEffect, useState} from "react";
import SmallAnimalF from "./SmallAnimalF";
import getID from "../Shared/id";



function App () {

    const [animals, setAnimals] = useState([]);
    const [cowInput, setCowInput] = useState("");

    useEffect(() => {
        const animalsCopy = JSON.parse(localStorage.getItem('allanimals'));
        if (null === animalsCopy) {
            return;
        }
       setAnimals(animalsCopy);
    }, []);



    const addAnimal = (a) => {
        const animal = {
            id: getID(), 
            color: cowInput, 
            animal: a,
            farm1: true
        };
        const animalsCopy = animals.slice();
        animalsCopy.push(animal);

        setAnimals(animalsCopy);
        localStorage.setItem('allanimals', JSON.stringify(animalsCopy));
    }

    const deleteAnimal = (id) => {
        const animalsCopy = animals.slice();
        for(let i=0; i<animalsCopy.length; i++) {
            if(animalsCopy[i].id === id) {
                animalsCopy.splice(i, 1);
                break;
            }
        }
       setAnimals(animalsCopy);
        
       localStorage.setItem('allanimals', JSON.stringify(animalsCopy));
    }
    
    const editAnimal = (id, color) => {
        const animalsCopy = animals.slice();
        for(let i=0; i<animalsCopy.length; i++) {
            if(animalsCopy[i].id === id) {
                animalsCopy[i].color = color;
                break;
            }
        }
      setAnimals(animalsCopy);
        
        localStorage.setItem('allanimals', JSON.stringify(animalsCopy));
    }

    const changeFarm = (id) => {
        const animalsCopy = animals.slice();
        for(let i=0; i<animalsCopy.length; i++) {
            if(animalsCopy[i].id === id) {
                animalsCopy[i].farm1 = !animalsCopy[i].farm1;
                break;
            }
        }
      setAnimals(animalsCopy);
        
        localStorage.setItem('allanimals', JSON.stringify(animalsCopy));
    }


    const cowInputHandler = (e) => {
        setCowInput(e.target.value);
    }

    /*
    componentDidMount() {
        const animals = JSON.parse(localStorage.getItem('allanimals'));
       
        if (null === animals) {
            return;
        }
        this.useState({
            animals: animals
        });
    }
   */


    return (
        < >
            <div className="field">
                <div className="farm">
                    <h1>Farm number 1</h1>
                     {animals.map(b => <SmallAnimalF farm1={b.farm1} farmNumber={1} key={b.id} delete={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} change={changeFarm} /> )}
                 </div>
                 <div className="farm">
                 <h1>Farm number 2</h1>
                    {animals.map(b => <SmallAnimalF farm1={b.farm1} farmNumber={2} key={b.id} delete={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} change={changeFarm} /> )}
                 </div>
            </div>
            <div>
                <input type="text" value={cowInput} onChange={cowInputHandler} />
                <button className="inputbutonas" onClick={() => addAnimal("cow")}>ADD COW</button>
                <button className="inputbutonas" onClick={() => addAnimal("sheep")}>ADD SHEEP</button>
            </div>
            
            
        </>
      
        );
    
}  
        export default App;
