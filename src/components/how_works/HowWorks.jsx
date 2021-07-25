import React from 'react'
import Card from '../card/Card'
import './HowWorks.css'
import { Container, Grid } from "@material-ui/core";

const HowWorks = () => {
    return (
        <div className="howWorks">
            <h1>¿Cómo funciona?</h1>

            <Grid
                className="how_Works_box__container"
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Card
                        num="1"
                        txt="Suscribete a un plan"
                    />
                </Grid>
                <Grid item>
                    <Card
                        num="2"
                        txt="Ingresa nuestra plataforma
o integra directamente"
                    />
                </Grid>
                <Grid item>
                    <Card
                        num="3"
                        txt="Sube tu imagen"
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default HowWorks
