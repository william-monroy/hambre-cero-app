import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
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
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
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

    '@media(maxWidth: 320px)' : {
      width: '100% !important'
    }
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const loginBtnDisabled = {
    [LOGIN_INIT]: true,
    [LOGIN_FAILED_CREDS]: true,
    [LOGIN_POPUP]: false,
    [LOGIN_CLICKED]: true,
  };
  const [loginState, setLoginState] = React.useState(LOGIN_INIT);
  const [errorProviderMsg, setErrorProviderMsg] = React.useState("");
  const [auth] = React.useState(startAuth());

  useEffect(() => {
    async function checkLogin() {
      const s = await initLogin(auth);
      if (s === LOGIN_FAILED_CREDS) {
        setErrorProviderMsg("Error al conectar con servidor App ID");
      }
      setLoginState(s);
    }
    if (loginState === LOGIN_INIT) {
      checkLogin();
    }
  }, [loginState, auth]);

  const onStartButton = async (e) => {
    if (loginState !== LOGIN_CLICKED) {
      setLoginState(LOGIN_CLICKED);
      const { decodeIDToken, userInfo } = await onLoginButtonClick(auth);
      //TODO: request API JWT here using userInfo or decodeIDToken
      //save JWT + userInfo in db
      console.log({ decodeIDToken, userInfo });
      const { user } = await authUser(userInfo);
      if (user) {
        history.push("/dashboard");
      }
      setLoginState(LOGIN_POPUP);
    }
  };

  return (
    <Container className="cont">
      <div className="navbar">
        <div className="navbar-item">
          <div className="square"></div>
          <h2 className="navbar-txt">Bienvenido!</h2>
        </div>
        <div className="navbar-item">
          <Link to="/">
            <img src="/assets/logo.png" alt="logo" className="navbar-logo" />
          </Link>
        </div>
      </div>
      <div className="form">
        <p>{errorProviderMsg}</p>
        <div className="form-content">
          <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item>
              <p className="form-txt">Ingreso de plataforma</p>
            </Grid>
            <Grid item>
              <img className="logo" src="/assets/logo.png" alt="logo" />
            </Grid>
            <Grid className="terms__container" item>
              <Link to="/terms">
                <p className="link-policy-terms form-txt">Ver terminos de uso</p>
              </Link>
              <Link to="/policy">
                <p className="link-policy-terms form-txt">Ver politica de privacidad</p>
              </Link>
            </Grid>
          </Grid>
        </div>
        <div className="form-bottom">
          <Button
            className={classes.button}
            onClick={onStartButton}
            disabled={loginBtnDisabled[loginState]}
          >
            Entrar
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
