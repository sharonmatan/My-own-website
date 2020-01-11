import React from "react";

export default function Projects(props) {
  //   let projectArray = ["pro 1", "pro 2", "pro 3", "pro 4", "pro 5", "pro 6"];
  return (
    <a href={props.link}>
      <h2>{props.project}</h2>
      <img
        className="skillBox image"
        src={props.image}
      />
    </a>
  );
}
