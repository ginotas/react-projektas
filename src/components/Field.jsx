import { Letter } from "./Letter";

function Field({letters}) {
    return (
        <>
       <div className="field">
            {letters.map((l, i) => (<Letter key={i} letter={l}></Letter>))}
       </div>
        </>
        );
    }
    
export default Field;