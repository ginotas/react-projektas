
import Kvadratas from "./kvadratas";


const data = ["rudasis", "juodasis", "baltasis"];

function App() {
    return (
        <>
      
        {data.map((b, i) => <Kvadratas key={i} bebras={b} /> )}
      
       
        </>
        );
    }
    
        export default App;