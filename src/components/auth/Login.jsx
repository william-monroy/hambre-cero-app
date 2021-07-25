import './Login.css';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  color: {
    color: theme.palette.text.primary,
  }
}));


const Login = () => {

  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="navbar">
        <div className="navbar-item">
          <div className="square"></div>
          <h2 className="navbar-txt">
            Bienenido!
          </h2>
        </div>
        <div className="navbar-item">
          <img src="assets/logo-frame.png" alt="logo-frame" className="navbar-logo" />
        </div>
      </div>
      <div className="form">
        <p className="form-txt">
          Inicia Sesión para continuar
        </p>
        <div className="form-content">
          <div className="input-email">
            <img src="assets/icon-user.png" alt="icon-user" />
            <TextField id="standard-basic" label="E-mail" />
          </div>
          <div className="input-password">
            <img src="assets/icon-password.png" alt="icon-password" />
            <FormControl
              className={clsx(classes.textField, classes.color)} color="primary"
            >
              <InputLabel
                htmlFor="standard-adornment-password"
                color="primary"
              >
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      color="primary"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                color="primary"
              />
            </FormControl>
          </div>

        </div>
        <div className="form-bottom">
          <Link to="/dashboard">
            <div className="button-signin">
              <p className="button-text-signin">Ingresar</p>
            </div>
          </Link>
          <p className="forgot-txt-signin">¿Olvidaste tu contraseña?</p>
          <Link to="/signup">
            <div className="button-signup">
              <p className="button-text-signup">Registrarse</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
