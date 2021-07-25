import React from "react";
import { Box, Avatar, Grid } from "@material-ui/core";
import Back from "./Back";
import "./TopBar.css";

const TopBar = ({
  link="/",
  logo = false,
  logoPosition = "left",
  back = false,
  backPosition = "left",
  avatar = true,
  avatarPosition = "right",
}) => {
  const componentBack = (<Back link={link} align={backPosition} />);
  const componentLogo = (
    <img src="assets/logo-frame.png" alt="logo-frame" className="navbar-logo" align={logoPosition} />
  );
  const componentAvatar = (
    <Avatar alt="Luis Cruz" src="/static/images/avatar/3.jpg" align={avatarPosition} />
  );
  let items = [];
  if (back) {
    items =
      backPosition === "left"
        ? [componentBack, ...items]
        : [...items, componentBack];
  }
  if (logo) {
    items =
      logoPosition === "left"
        ? [componentLogo, ...items]
        : [...items, componentLogo];
  }
  if (avatar) {
    items =
      avatarPosition === "left"
        ? [componentAvatar, ...items]
        : [...items, componentAvatar];
  }
  const [left="", right=""] = items;
  return (
    <div>
      <Box my={2}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {left}
          {right}
        </Grid>
      </Box>
    </div>
  );
};

export default TopBar;
