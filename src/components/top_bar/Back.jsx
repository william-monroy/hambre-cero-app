import React from "react";
import { Link } from "react-router-dom";

const Back = ({ link }) => {
  return (
    <Link to={link} style={{ color: "#409d87", display: "flex", alignItems: "center" }}>
      <img style={{ marginRight: "1rem" }} src="./assets/back_icon.png" alt="back" />
      Volver
    </Link>
  );
};

export default Back;
