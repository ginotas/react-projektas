import { Link } from "react-router-dom";

function AnimalLink(props) {
    return (

        <li><Link to={"/animal/" + props.animal.id}>{props.animal.name}</Link></li>

    )
}

export default AnimalLink;

