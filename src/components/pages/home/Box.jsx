import React from "react";
import "./css/Box.css"
import { LuBadgeDollarSign } from "react-icons/lu";


function Img(params) {
    return <img src={params.url} />
}

function Box({ url, name, description, onAddToCard, price }) {
    return <div className="box">
        <Img url={url} />
        <div className="some">
            <h3>{name}</h3>
            <h3> <LuBadgeDollarSign />
                {price}</h3>
            <p>{description}</p>
            <button onClick={() => onAddToCard({ url, name, description, price, nightCount: 1 })}>Add to Card</button>
        </div>
    </div>
}


export default Box;
