import React from 'react'
import { Link } from "react-router-dom";
import './GetStarted.css'

const GetStarted = () => {
    return (
        <div className="getStarted">
            <div className="back">
                <img src="assets/waves2.png" alt="waves" className="waves" />
            </div>
            <div className="front">
                <Link to="/login">
                    <div className="button">
                        <p className="button-text">COMIENZA YA</p>
                    </div>
                </Link>
                <p className="txt-desc">Crea una cuenta o regístrate para empezar a usar nuestra API.</p>
            </div>
        </div>
    )
}

export default GetStarted
