import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import BoxContainer from "./shortcut/BoxContainer";
import TryButton from "../button/Button";
import TopBar from "../top_bar/TopBar";

const Dashboard = () => {
  return (
    <Container maxWidth="md">
      <TopBar />
      <BoxContainer />
      <Grid
        className="dashboard_box__container"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Link to="/api">
          <TryButton type="button" mode="upload" text="PRUEBA NUESTRA API" />
        </Link>
      </Grid>
    </Container>
  );
};

export default Dashboard;