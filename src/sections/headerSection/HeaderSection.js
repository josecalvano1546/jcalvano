import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./StyleHeader.css";
import { Rotate as Hamburger } from "hamburger-react";
const HeaderSection = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="logo logoText">
        <p>JCalvano</p>
      </div>
      <div className="textMenu">
        <p>menu</p>
      </div>
      <div className="menu">
        <Hamburger toggled={isOpen} toggle={setOpen} size={25} duration={0.8} />
      </div>
    </>
  );
};
export default HeaderSection;
