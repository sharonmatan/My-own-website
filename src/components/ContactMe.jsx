import React from "react";

export default function ContactMe(props) {
  return (
    <div className="skills skillBox">
      <span>
        <img className="contactImage" src={props.image} />
      </span>
      <h1 className="Title">{props.platform}</h1>
      <a className ="contactMeLink" href={props.link}>{props.text}</a>
    </div>
  );
}
