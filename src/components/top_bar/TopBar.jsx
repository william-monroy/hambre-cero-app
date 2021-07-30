import React, { useState, useEffect } from "react";
import { Box, Avatar, Grid } from "@material-ui/core";
import Back from "./Back";
import { getUserFromDB } from "../../js/services/auth";
import { APP_LOGO, DEFAULT_AVATAR } from '../../js/constants'
import "./TopBar.css";
import Dropdown from '../dropdown/Dropdown'
import './TopBar.css'

const TopBar = ({
  link = "/",
  logo = false,
  logoPosition = "left",
  back = false,
  backPosition = "left",
  avatar = true,
  avatarPosition = "right",
}) => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getUser(){
        getUserFromDB().then((u) => setUser(u));
    }
    if(!user){
        getUser();
    }
  }, [user]);
  const componentBack = (<Back link={link} align={backPosition} />);
  const componentLogo = (
    <img src={APP_LOGO} alt="dmetr-logo" className="navbar-logo" align={logoPosition} />
  );
  const [open, setOpen] = useState(false);
  const componentAvatar = (
    <div  
      onClick={() =>setOpen(!open)}
      className="avatar"
    >
      <Avatar alt="Luis Cruz" src={ user?.picture ? user.picture : DEFAULT_AVATAR} align={avatarPosition} className="avatar"/>
      {open?<Dropdown />:null}
    </div>
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

  const [left = "", right = ""] = items;
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
