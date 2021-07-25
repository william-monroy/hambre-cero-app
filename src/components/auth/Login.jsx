import React from 'react';
import './Login.css';
import TextField from '@material-ui/core/TextField'

const Login = () => {
    return (
        <div className="login">
            <div className="navbar">
                <h2 className="navbar-txt">Bienenido!</h2>
                <img src="assets/logo-frame.png" alt="logo-frame" className="navbar-logo" />
            </div>
            <div className="form">
                <p className="form-txt">
                    Inicia Sesión para continuar
                </p>
                <div className="input-email">
                    <img src="assets/icon-user.png" alt="icon-user" />
                    <TextField id="standard-basic" label="E-mail" />
                </div>
                <div className="input-password">
                    <img src="assets/icon-password.png" alt="icon-password" />
                    <TextField
                        id="standard-password-input"
                        label="●●●●●●"
                        type="password"
                        autoComplete="current-password"
                    />
                    <img src="assets/eye.png" alt="icon-eye" />
                </div>
            </div>
            <Button size="medium" className={classes.margin}>
                Crear Cuenta
            </Button>
        </div>
    )
}

export default Login
