import React from "react";
import { Container, Card, Typography } from "@material-ui/core";
import TopBar from "../../components/top_bar/TopBar";
import Table from "../../components/table/Table";
import "./Categories.css"

function createData(id, name) {
  return {
    id,
    data: [
      { value: id, style: {}, align: "left" },
      { value: name, style: {}, align: "left" },
    ],
  };
}

const rows = [
  createData(1, "Fruta"),
  createData(2, "Verdura" ),
  createData(3, "Eclair"),
  createData(4, "Frozen yoghurt"),
  createData(5, "Gingerbread"),
  createData(6, "Honeycomb"),
  createData(7, "Ice cream"),
  createData(8, "Jelly Bean"),
  createData(9, "KitKat" ),
  createData(10, "Lollipop"),
  createData(11, "Marshmallow"),
  createData(12, "Nougat"),
  createData(13, "Oreo"),
].sort((a, b) => (a.id < b.id ? -1 : 1));

const headers = [
  { id: 0, name: "ID" },
  { id: 1, name: "Entidad" },
];

const Results = () => {
  return (
    <Container maxWidth="md">
      <TopBar link="/dashboard" backPosition="left" avatarPosition="right" back={true} avatar={true} />
      <Card>
        <Typography className="results__title" variant="subtitle1" component="h3">
          CATEGORIAS
        </Typography>
        <Table headers={headers} rows={rows} />
      </Card>
    </Container>
  );
};

export default Results;
