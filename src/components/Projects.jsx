import React from "react";

export default function Projects(props) {
  return (
    <div><a className="projectTitle" href={props.link}>
      <h2>{props.project}</h2>
      <img
        className="skillBox image"
        src={props.image}
        style={props.photo}
      />
    </a>
</div>
  );
}
