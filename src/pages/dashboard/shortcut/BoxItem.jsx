import React from "react";
import { Grid } from "@material-ui/core";
import "./BoxItem.css";

const BoxItem = ({ box }) => {
  return (
    <Grid className="dashboard_box__item" item>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <h3 className="dashboard_box__title">{box.title}</h3>
        </Grid>
        <Grid className="dashboard_item__container" item>
          <Grid container alignItems="flex-end" justifyContent="space-between">
            <img className="dashboard_box__img" src={box.logo} alt="logo dashboard" />
            <span className="dashboard_box__qty">{box.format(box.total)}</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BoxItem;
