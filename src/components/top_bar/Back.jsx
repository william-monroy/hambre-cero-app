import React from "react";
import { Link } from "react-router-dom";

const Back = ({ link }) => {
  return (
    <Link to={link}>
      <img src="./assets/back_icon.png" alt="back" />
      Volver
    </Link>
  );
};

export default Back;
