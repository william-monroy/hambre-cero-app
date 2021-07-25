import React from "react";
import { Container, Grid } from "@material-ui/core";
import TryButton from "../button/Button";
import TopBar from "../top_bar/TopBar";

const Upload = () => {
  return (
    <Container>
      <TopBar link="/dashboard" />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <TryButton type="button" mode="upload" text="SUBE TU PRODUCTO" />
      </Grid>
    </Container>
  );
};

export default Upload;
