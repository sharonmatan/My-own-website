import React from "react";

export default function Header(props) {
  let headerArray1 = ["Home", "About me", "Experience"];
  let headerArray2 =["Skills", "Projects","Contact me" ];
  return (
    <div className="cover">
      <img src={props.image} alt="" className="myPhoto" />
      <div className="whiteLine">
        <span className="btnFlex">
          {headerArray1.map((item, index) => {
            return <span className="headerBtn" key={index}>{item}</span>;
          })}
        </span>
        <span className="nameBox">
          <h1 className="myName">{props.name}</h1>
          <h2 className="myPro">{props.pro}</h2>
        </span>
        <span className="btnFlex">
          {headerArray2.map((item, index) => {
            return <span className="headerBtn" key={index}>{item}</span>;
          })}
        </span>

      </div>
    </div>
  );
}
