import React from "react";
import "./Dropdown.css";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { logoutUser } from "../../js/services/auth";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Dropdown = () => {
  const history = useHistory();
  const onLogoutClick = async () => {
    await logoutUser();
    history.push("/login");
  };
  const DropdownItem = (props) => {
    return (
      <Link to={props.link} className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-button">{props.rightIcon}</span>
      </Link>
    );
  };

  return (
    <div className="dropdown">
      <DropdownItem link="/account" leftIcon={<AccountCircleIcon />}>
        Mi Perfil
      </DropdownItem>
      <DropdownItem link="#" leftIcon={<ExitToAppIcon />}>
        <Button onClick={onLogoutClick}>Cerrar Sesión</Button>
      </DropdownItem>
    </div>
  );
};

export default Dropdown;
