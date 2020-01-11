import React from "react";

export default function Header(props) {
  let headerArray1 = ["Home", "About me", "Experience"];
  let headerArray2 = ["Skills", "Projects", "Contact me"];
  let nameArray = ["M", "a", "t", "a", "n", "-", "S", "h", "a", "r", "o", "n"];
  let proArray = [
    "F",
    "u",
    "l",
    "l",
    "-",
    "S",
    "t",
    "a",
    "c",
    "k",
    "-",
    "D",
    "e",
    "v",
    "l",
    "o",
    "p",
    "e",
    "r"
  ];
  return (
    <div className="cover">
      <img src={props.image} alt="" className="myPhoto" />
      <nav className="whiteLine">
        <span className="btnFlex">
          {headerArray1.map((item, index) => {
            return (
              <span className="headerBtn" key={index}>
                {item}
              </span>
            );
          })}
        </span>
        <div className="nameBox">
          <div className="myName"></div>
          {nameArray.map(letter => {
            return (
                <h1 className="myName1">{letter}</h1>
            );
          })}
          <div className="myPro"></div>
          {proArray.map(letter => {
            return (
                <h2 className="myPro1">{letter}</h2>
            );
          })}
        </div>
        <span className="btnFlex">
          {headerArray2.map((item, index) => {
            return (
              <span className="headerBtn" key={index}>
                {item}
              </span>
            );
          })}
        </span>
      </nav>
    </div>
  );
}
