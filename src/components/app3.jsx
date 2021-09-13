
import Mygtukas from "./Mygtukas";


const data = [["spausk", 1], ["myk", 10], ["spaudinek", 100], ["klikink", 1000]];

function App() {
    return (
        <>
      
        {data.map((b, i) => <Mygtukas key={i} tekstas={b[0]} amount={b[1]} /> )}
      
       
        </>
        );
    }
    
        export default App;