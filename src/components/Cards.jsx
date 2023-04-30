import React from "react";

const Cards=(props)=>{
    return(
        <div>
            <img src={props.img} alt="card image" className="card--img"/>
            <div className="card--stats">
                <img src="star.png" alt="star" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">
                    ({ props.reviewCount })    
                </span>
                <span className="gray"> { props.location }</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
export default Cards;