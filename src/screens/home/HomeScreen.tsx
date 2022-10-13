import React from 'react';
import './homeScreen.css';
import {Button, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";

const HomeScreen = () => {
    return (
        <div id="home-container">
            <div className="home-info-label">
                Платформа для поиска единомышленников, научных руководителей, студентов для реализации научных проектов
            </div>
            <div className="home-center-block">
                <h2>Авторизация</h2>
                <div className="withPadding">
                    <TextField id="outlined-basic" label="Логин" variant="outlined"/>
                </div>
                <div className="withPadding">
                    <TextField id="outlined-basic" label="Пароль" variant="outlined"/>
                </div>
                <div className="withPadding">
                    <Button variant="contained">Войти</Button>
                </div>
                Ещё не зарегистрированы? <NavLink to="registration">Регистрация</NavLink>

            </div>

        </div>
    );
};

export default HomeScreen;