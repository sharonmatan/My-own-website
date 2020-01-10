import React from "react";

export default function AboutMe(props) {
  return (
    <div className="paragraph">
      <p className="aboutMe">{props.aboutMe}</p>
    </div>
  );
}
