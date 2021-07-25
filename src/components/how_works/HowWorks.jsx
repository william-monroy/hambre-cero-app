import React from "react";
import Card from "../card/Card";
import "./HowWorks.css";
const HowWorks = () => {
  return (
    <div className="howWorks">
      <h1>¿Cómo funciona?</h1>
      <div className="cards-container">
        <Card num="1" txt="Suscribete a un plan" />
        <Card num="2" txt="Ingresa nuestra plataforma o integra directamente" />
        <Card num="3" txt="Sube tu imagen" />
      </div>
    </div>
  );
};

export default HowWorks;
