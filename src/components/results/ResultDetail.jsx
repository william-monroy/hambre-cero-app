import React, { useState, useEffect, useRouter } from "react";
import { useLocation } from "react-router-dom";
import { Button, Container, Grid, Box } from "@material-ui/core";
import TopBar from "../top_bar/TopBar";
import { VALID_STATES } from "../../js/constants";
import Product from "../../js/services/Product";
import CardInfo from "../upload/CardInfo";

import "./ResultDetail.css";

const ResultDetail = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(null);
  const { pathname } = useLocation()
  const [result, setResult] = useState({
    user: "",
    suggested_price: 0.0,
    status: 0,
    expiration: 0,
    viable_distance: 0,
    nearby_providers: 0,
    donatable: true,
    salable: true,
    precision: 0,
    entity: "-",
    category: "-",
    lote: 0,
  });

  const states = Object.keys(VALID_STATES);

  const images = {
    [states[0]]: "./assets/excelente.png",
    [states[1]]: "./assets/en_el_limite.png",
    [states[2]]: "./assets/madurando.png",
  };

  const id = pathname.substring(pathname.lastIndexOf("/") + 1);
    useEffect(() => {
      const product = new Product();
      product.get(id).then( (data) => {
        setResult(data);
      });
    }, [])
  return (
    <Container maxWidth="md">
      <TopBar
        link="/dashboard"
        backPosition="left"
        avatarPosition="right"
        back={true}
        avatar={true}
      />
      <Box display="flex" justifyContent="center" my={2}>
        <img width={250} src={images[result.status]} alt="bannanas" />
      </Box>
      {isDataLoaded && <CardInfo data={result} />}
    </Container>
  );
};

export default ResultDetail;
