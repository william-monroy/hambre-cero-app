import React from 'react'
import './Dropdown.css'
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Dropdown = () => {

    const DropdownItem = (props) => {
        return (
            <Link to={props.link} className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-button">{props.rightIcon}</span>
            </Link>
        );
    }

    return (
        <div className="dropdown">
            <DropdownItem
                link="/account"
                leftIcon={<AccountCircleIcon />}
            >
                Mi Perfil
            </DropdownItem>
            <DropdownItem
                link="/login"
                leftIcon={<ExitToAppIcon/>}
            >
                Cerrar Sesión
            </DropdownItem>
        </div>
    )
}

export default Dropdown
