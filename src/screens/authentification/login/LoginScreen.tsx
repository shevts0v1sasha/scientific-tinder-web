import React, {useContext, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {Context} from "../../../index";
import './loginScreen.css';
import {observer} from "mobx-react";

const LoginScreen = () => {

    const navigate = useNavigate();
    const {rootStore} = useContext(Context);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = async () => {
        const result = await rootStore.authStore.login(username, password);
        console.log(result);
        if (result) {
            navigate('/cards');
        }
    }

    console.log('login');

    return (
        <>
            {rootStore.authStore.isAuth && <Navigate to='/'/>}
            <main>
                <div id='test'>
                    <div id="login-container">
                        <div className="login-info-label">
                            <strong>
                                Платформа для поиска единомышленников, научных руководителей, студентов для реализации
                                научных
                                проектов
                            </strong>
                        </div>
                        <div className="login-center-block">
                            <h2>Авторизация</h2>
                            <div>
                                <TextField
                                    id="outlined-basic"
                                    label="Логин"
                                    variant="outlined"
                                    onChange={(evt) => setUsername(evt.target.value)}
                                />
                            </div>
                            <div className="withPadding">
                                <TextField
                                    id="outlined-basic"
                                    label="Пароль"
                                    variant="outlined"
                                    onChange={(evt) => setPassword(evt.target.value)}
                                />
                            </div>
                            <div className="withPadding">
                                <Button variant="contained" onClick={login}>Войти</Button>
                            </div>
                            Ещё не зарегистрированы? <NavLink to="registration">Регистрация</NavLink>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
};

export default observer(LoginScreen);