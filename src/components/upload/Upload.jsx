import React, { useState } from "react";
import { Button, Container, Grid, Box } from "@material-ui/core";
import TopBar from "../top_bar/TopBar";
import CardInfo from "./CardInfo";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Product from "../../js/services/Product";

import "./Upload.css";

const Upload = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(null);
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

  const loadImage = async ({ target }) => {
    const file = URL.createObjectURL(target.files[0]);
    setIsImageLoaded(file);
    setIsDataLoaded(true);
    const product = new Product();
    const {data} = await product.upload(file);
    setResult(data);
  };

  return (
    <Container maxWidth="md">
      <TopBar
        link="/dashboard"
        backPosition="left"
        avatarPosition="right"
        back={true}
        avatar={true}
      />

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {!isImageLoaded && (
          <Box my={5}>
            <Button
              color="primary"
              style={{ background: "#0162ff" }}
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              onChange={loadImage}
            >
              <Box px={5} py={1}>
                SUBE TU PRODUCTO
                <input type="file" hidden />
              </Box>
            </Button>
          </Box>
        )}
      </Grid>
      {isImageLoaded && (
        <Box display="flex" justifyContent="center" my={2}>
          <img width={250} src={isImageLoaded} alt="bannanas" />
        </Box>
      )}
      {isDataLoaded && <CardInfo data={result} className="boton" />}

    </Container>
  );
};

export default Upload;
