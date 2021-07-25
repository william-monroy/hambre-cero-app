import React from "react";
import { Container, Card, Typography } from "@material-ui/core";
import TopBar from "../top_bar/TopBar";
import Table from "../table/Table";
import { VALID_STATES } from "../../js/constants";
import "./Results.css"

function createData(id, name, batch, date, state) {
  return {
    id,
    data: [
      { value: id, style: {}, align: "left" },
      { value: name, style: {}, align: "left" },
      { value: batch, style: { width: 60 }, align: "left" },
      { value: date, style: { width: 160 }, align: "center" },
      { value: VALID_STATES[state], style: { width: 100 }, align: "left" },
      {
        style: {},
        align: "center",
        config: { url: "/results", hasUrl: true },
      },
    ],
  };
}

const rows = [
  createData(1, "Cupcake", 305, "July 25, 2021", 1),
  createData(2, "Donut", 452, "July 25, 2021", 1),
  createData(3, "Eclair", 262, "July 25, 2021", 1),
  createData(4, "Frozen yoghurt", 159, "July 25, 2021", 1),
  createData(5, "Gingerbread", 356, "July 25, 2021", 1),
  createData(6, "Honeycomb", 408, "July 25, 2021", 1),
  createData(7, "Ice cream sandwich", 237, "July 25, 2021", 1),
  createData(8, "Jelly Bean", 375, "July 25, 2021", 1),
  createData(9, "KitKat", 518, "July 25, 2021", 1),
  createData(10, "Lollipop", 392, "July 25, 2021", 1),
  createData(11, "Marshmallow", 318, "July 25, 2021", 1),
  createData(12, "Nougat", 360, "July 25, 2021", 1),
  createData(13, "Oreo", 437, "July 25, 2021", 1),
].sort((a, b) => (a.id < b.id ? -1 : 1));

const headers = [
  { id: 0, name: "ID" },
  { id: 1, name: "Entidad" },
  { id: 2, name: "# Lote" },
  { id: 3, name: "Fecha" },
  { id: 4, name: "Estado" },
  { id: 5, name: "Acción" },
];

const Results = () => {
  return (
    <Container>
      <TopBar link="/dashboard" />
      <Card>
        <Typography className="table__title" variant="subtitle1" component="h3">
          RESULTADOS
        </Typography>
        <Table headers={headers} rows={rows} />
      </Card>
    </Container>
  );
};

export default Results;
