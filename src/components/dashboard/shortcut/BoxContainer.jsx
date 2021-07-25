import React from "react";
import { Link } from "react-router-dom";
import BoxItem from "./BoxItem";
import { Grid } from "@material-ui/core";

const boxes = [
  {
    id: 1,
    title: "Mis productos",
    logo: "./assets/product_icon.png",
    total: 360,
    href: "#",
    format: (v) => v,
  },
  {
    id: 2,
    title: "Resultados",
    logo: "./assets/results_icon.png",
    total: 3400,
    href: "/results",
    format: (v) => {
      let unit = "";
      if (v > 1000 * 1000) {
        v = Math.round(v / 1000 / 1000);
        unit = " M";
      } else if (v > 1000) {
        v = Math.round(v / 1000);
        unit = " K";
      }

      return `${v}${unit}`;
    },
  },
  {
    id: 3,
    title: "Categorias",
    logo: "./assets/category_icon.png",
    total: 21,
    href: "#",
    format: (v) => v,
  },
  {
    id: 4,
    title: "Nivel de calidad",
    logo: "./assets/hq_icon.png",
    total: 89,
    href: "#",
    format: (v) => {
      return `${v} %`;
    },
  },
];

const BoxContaner = () => {
  return (
    <Grid
      className="dashboard_box__container"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {boxes.map((box) => (
        <Link to={box.href} key={box.id}>
          <BoxItem box={box} />
        </Link>
      ))}
    </Grid>
  );
};

export default BoxContaner;
