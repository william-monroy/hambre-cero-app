import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"
import {
  APP_LOGO,
  LOGIN_INIT,
  LOGIN_FAILED_CREDS,
  LOGIN_POPUP,
  LOGIN_CLICKED,
} from "../../js/constants";
import {
  authUser,
  startAuth,
  initLogin,
  onLoginButtonClick,
} from "../../js/services/auth";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";
import "./Login.css";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  color: {
    color: theme.palette.text.primary,
  },
  button: {
    width: "380px",
    height: "70px",
    backgroundColor: "#25C685",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory()
  const loginBtnDisabled = {
    [LOGIN_INIT]: true,
    [LOGIN_FAILED_CREDS]: true,
    [LOGIN_POPUP]: false,
    [LOGIN_CLICKED]: true,
  };
  const [loginState, setLoginState] = React.useState(LOGIN_INIT);
  const [errorProviderMsg, setErrorProviderMsg] = React.useState("");
  const [auth] = React.useState(startAuth());
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  useEffect(() => {
    async function checkLogin() {
      const s = await initLogin(auth);
      if (s === LOGIN_FAILED_CREDS) {
        setErrorProviderMsg("Error al conectar con servidor App ID");
      }
      setLoginState(s);
    }
    if (loginState === LOGIN_INIT) {
      checkLogin()
    }
  }, [loginState, auth]);

  const onStartButton = async (e) => {
    if (loginState !== LOGIN_CLICKED){
      setLoginState(LOGIN_CLICKED);
      const {decodeIDToken, userInfo} = await onLoginButtonClick(auth);
      //TODO: request API JWT here using userInfo or decodeIDToken
      //save JWT + userInfo in db
      console.log({decodeIDToken, userInfo})
      const { user } = await authUser(userInfo);
      if (user) {
        history.push("/dashboard");
      }
      setLoginState(LOGIN_POPUP);

    }
  };

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
          <h2 className="navbar-txt">Bienvenido!</h2>
        </div>
        <div className="navbar-item">
          <Link to="/">
            <img src={APP_LOGO} alt="logo-dmetr" className="navbar-logo" />
          </Link>
        </div>
      </div>
      <div className="form">
        <p className="form-txt">Inicia Sesión para continuar</p>
        <div className="form-content">
          {errorProviderMsg}
          <div className="input-email">
            <img src="assets/icon-user.png" alt="icon-user" />
            <TextField id="standard-basic" label="E-mail" />
          </div>
          <div className="input-password">
            <img src="assets/icon-password.png" alt="icon-password" />
            <FormControl
              className={clsx(classes.textField, classes.color)}
              color="primary"
            >
              <InputLabel htmlFor="standard-adornment-password" color="primary">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
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
          <Button
            className={classes.button}
            onClick={onStartButton}
            disabled={loginBtnDisabled[loginState]}
            value="Iniciar"
          >
            Iniciar
          </Button>
          <p className="forgot-txt-signin">¿Olvidaste tu contraseña?</p>
          <Link to="/signup">
            <div className="button-signup">
              <p className="button-text-signup">Registrarse</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
