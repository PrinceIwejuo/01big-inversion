import React from "react";

const PersonCard = (props) => {




    return <div>
        <h3>{props.personName}</h3>
        <p>Age: {props.Age}</p>
        <p>Hair Color: {props.haircolor} </p>
    </div>
}

export default PersonCard