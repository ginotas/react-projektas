import { useParams } from "react-router";

function Street() {

const { street } = useParams();

    return (
        <h1>street {street}</h1>
    )
}

export default Street;