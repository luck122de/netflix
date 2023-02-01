import React from "react";

function Cards(props){
    return(
  <div className="Cards">
  <div className="card">
    <img src={props.img} className='image' alt="myPic"/>
  <div className="card_information">
    <span className="titles">{props.title}</span>
    <h3 className="snames">{props.sname}</h3>
    <a href={props.link} className="links" target="_blank">
      <button className='button'>Watch Now</button>
    </a>
  </div>
  </div>
  
  </div>);
  }
  export default Cards;