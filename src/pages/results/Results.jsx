import React, { useEffect, useState } from "react";
import { Container, Card, Typography } from "@material-ui/core";
import TopBar from "../../components/top_bar/TopBar";
import Table from "../../components/table/Table";
import Product from "../../js/services/Product";
import "./Results.css";


const headers = [
  { id: 0, name: "ID" },
  { id: 1, name: "Entidad" },
  { id: 2, name: "# Lote" },
  { id: 3, name: "Fecha" },
  { id: 4, name: "Estado" },
  { id: 5, name: "Acción" },
];

const Results = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const product = new Product();
    product.fetch().then( ({data}) => {
      setRows(data);
    });
    
  }, []);

  return (
    <Container maxWidth="md">
      <TopBar
        link="/dashboard"
        backPosition="left"
        avatarPosition="right"
        back={true}
        avatar={true}
      />
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
