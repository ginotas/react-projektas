
import React, { useState } from "react";


function Sort(props) {

    const [select, setSelect] = useState("titleAsc");

    const doSelect = (e) => {
        
        setSelect(e.target.value);
        props.makeSort(e.target.value);
    }


    return (
        <div className="sorter">
            <select onChange={doSelect}>
                <option value="titleAsc">Pagal pavadinima</option>
                <option value="titleDesc">Pagal pavadinima atvirksciai</option>
                <option value="priceAsc">Pagal kaina</option>
                <option value="priceDesc">Pagal kaina atvirksciai</option>
            </select>
        </div>
    )
}



export default Sort;