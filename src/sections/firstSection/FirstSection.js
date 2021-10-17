import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./StylesFirst.css";
import TextDescription from "../../component/textDescription/TextDescription";

const FirstSection = () => {
  document.addEventListener("DOMContentLoaded", function (event) {
    // array with texts to type in typewriter
    var dataText = ["Front-End developer", "Mobile developer"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < text.length) {
        // add next character to h1
        document.querySelector("h1").innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 200);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == "function") {
        // call callback after timeout
        setTimeout(fnCallback, 800);
      }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
      if (typeof dataText[i] === undefined) {
        setTimeout(function () {
           StartTextAnimation(0);
        }, 2000);
      }
      // check if dataText[i] exists
      if (dataText[i] !== undefined && i < dataText[i].length) {
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      } else {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 2000);
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

  return (
    <div className="fistContainer">
      <div className="textTitle">
        <h2>Hi! I'm Jose Calvano</h2>
        <h1>Front-End developer</h1>
      </div>
      <div className="containerImg">
        <div className="circleBorder">
          <div className="circle"></div>
        </div>
      </div>

      <div id="cv">
        <a
          download="CV_JoseCalvano"
          href="imagenes/curriculum.pdf"
          class="ghost-button"
          target="_blank"
        >
          CV
        </a>
        
      </div>
      <div className="container-fluid description">
        <div class="row justify-content-between">
          <div class="col-lg-4 col-md-4 .col-sm-1">
            <TextDescription
              title={"BIOGRAPHY"}
              descriptionOne={
                "Work for money and design for love! I’m José, an developer based in Argentina."
              }
              direction={"right"}
            />
          </div>
          <div class="col-lg-4 col-md-4 .col-sm-1">
            <TextDescription
              title={"EDUCATION"}
              descriptionOne={"Information systems engineer"}
              descriptionTwo={"Universidad Tecnologica Nacional"}
              descriptionThree={"Facultad Regional Resistencia"}
            />
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-lg-4 col-md-4 .col-sm-1">
            <TextDescription
              title={"CONTACT"}
              descriptionOne={"Corrientes - Argentina"}
              descriptionTwo={"josecalvano1546@gamil.com"}
              direction={"right"}
            />
          </div>
          <div class="col-lg-4 col-md-4 .col-sm-1">
            <TextDescription
              title={"SERVICE"}
              descriptionOne={"Front-End developer"}
              descriptionTwo={"Mobile developer"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstSection;

{
  /* <div className="description">
        <div className="textDescription">
          <TextDescription
            title={"BIOGRAPHY"}
            descriptionOne={
              "Work for money and design for love! I’m José, an developer based in Argentina."
            }
          />
          <TextDescription
            title={"EDUCATION"}
            descriptionOne={"Information systems engineer"}
            descriptionTwo={
              "Universidad Tecnologica Nacional - Facultad Regional Resistencia"
            }
          />
        </div>

        <div className="textDescription">
          <TextDescription
            title={"CONTACT"}
            descriptionOne={"Corrientes - Argentina"}
            descriptionTwo={"josecalvano1546@gamil.com"}
          />
          <TextDescription
            title={"SERVICE"}
            descriptionOne={"Front-End developer"}
            descriptionTwo={"Mobile developer"}
          />
        </div>
      </div> */
}
