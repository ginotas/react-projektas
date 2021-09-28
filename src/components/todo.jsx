
import User from './User';
import {Link} from 'react-router-dom';

function Todo(props) {

    return (
        <div className="todo">
            <Link to={'/'+props.data.id}><div className='id'>{props.data.id}</div></Link>
            <User id={props.data.userId}></User>
            <div className="title">{props.data.title}</div>
            <div className="status" onClick={()=>props.sniuriukas(props.data.id)} style={
                {backgroundColor: props.data.completed === false ? 'red' : 'green'}
                }></div>
        </div>
    );
}


export default Todo;

/*
 nd:  https://in3.dev/knygos/

 Gražiais su CSS padaryti prekių sąrašą.
    Pridėti mygtuką pirkti. 
     (mygtukas nieko gali nedaryti, bet gali kazka daryti)

     tips: img taga uzdaryti!
     vardu komponento nereikes, isimti (<User>)
     sniuriko nereikia, isimti. 


*/