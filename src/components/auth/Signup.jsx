import React from 'react';
import './Signup.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
    {
      value: 'Femenino',
      label: 'Femenino',
    },
    {
      value: 'Maculino',
      label: 'Masculino',
    },
    {
      value: 'Prefiero no decirlo',
      label: 'Prefiero no decirlo',
    },
  ]; 
  
const Signup = () => {
    const [currency, setCurrency] = React.useState('Femenino');
    const handleChange = (event) => {
        setCurrency(event.target.value);
      };
    
    return (
        <div className = "signup">
            <div className = "navbar">
                <h2 className = "reg">REGISTRO</h2>
                <img src="assets/logo-frame.png" alt="logo-frame" className="navbar-logo"/>
            </div>
            <p>Complete el siguiente formulario para registrarse en el sistema</p>
           
            <div className = "form" align = "center">
                
                <div className = "form-colf" >
                    <div className="nombre_comp">
                        <TextField id="nombres" label="Nombres completos" variant="outlined" />
                    </div>
                    <div className="select-sexo">
                        <TextField
                            id="outlined-select-currency-native"
                            select
                            label="Selecciona tu sexo"
                            value={currency}
                            onChange={handleChange}
                            SelectProps={{
                                native: true,
                            }}
                            variant="outlined"
                                >
                            {currencies.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div className = "contrasenia">
                        <TextField type = "password"id="contra" label="Contraseña" variant="outlined" />
                    </div>
                    
                </div>
                <div className = "form-der" >
                    <div className="input-apellidos">
                        <TextField id="apellido-basic" label="Apellidos completos" variant="outlined" />
                    </div>
                    <div className = "input-Email">
                        <TextField id="email-basic" label="Email" variant="outlined" />
                    </div>
                    <div className = "input-confirm" >
                        <TextField type = "password" id="confirm-basic" label="Repita su contraseña" variant="outlined" />
                    </div>
                </div>
            </div>
            
            
        </div>
        
        
    )
}

export default Signup
