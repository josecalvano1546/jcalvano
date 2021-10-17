import React from "react";
import "./StyleDescription.css";

const TextDescription = (props) => {
 const direction = props.direction === "right" ? "fistTitleLeft" : "fistTitleRight"
 const directionDescription = props.direction === "right" ? "fistDescriptionLeft" : "fistDescriptionRight"
  return (
    <div className={direction}>
      <div>
      <p>{props.title}</p>
      <br />
      </div>
      <div className={directionDescription}>
        <p >{props.descriptionOne}</p>
        <br />
        <p >{props.descriptionTwo}</p>
        <br />
        <p >{props.descriptionThree}</p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default TextDescription;
