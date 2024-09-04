import React from "react"
import Bill from './images.jpeg'


export default function Card(props) {
    let badgeText
    if (props.openspots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    // else {
    //     badgeText = null
    // }
    return (
        <div className="card">
            {console.log(props.location)}
            {/* {badgeText && */<div className="cards--badge">{badgeText}</div>}
            <img src={props.img} className="card--image" />

            <div className="card-stats">
                <span>{props.rating}</span>
                <span className="gray"> {props.reviewCount} </span>
                <span className="gray"> {props.country} </span>
            </div>
            <p>{props.title}</p>
            <p className="cards--price"> <span className="bold">From {props.price}</span> / person</p>
        </div>
    )
}