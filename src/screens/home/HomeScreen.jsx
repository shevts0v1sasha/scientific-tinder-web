import React, {useEffect} from 'react';
import './homeScreen.css';
import {Button, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";
import axios from "axios";

var stompClient = null;

const HomeScreen = () => {

    /**
     * Temp template for sockets
     */
    // useEffect(() => {
    //     connect();
    // }, []);
    // const connect = () => {
    //     const Stomp = require("stompjs");
    //     var SockJS = require("sockjs-client");
    //     SockJS = new SockJS("http://localhost:8080/ws");
    //     stompClient = Stomp.over(SockJS);
    //     stompClient.connect({}, onConnected, onError);
    // };
    // const onConnected = () => {
    //     console.log("connected");
    //     stompClient.subscribe(
    //         // "/user/" + currentUser.id + "/queue/messages",
    //         "/user/0/queue/messages",
    //         onMessageReceived
    //     );
    // };
    // const onMessageReceived = (msg) => {
    //     const notification = JSON.parse(msg.body);
    //     console.log(notification);
    // }
    // const onError = (err) => {
    //     console.log('ERROR');
    //     console.log(err);
    // };
    // const sendMessage = () => {
    //     const message = {
    //         message: "HELLO FROM JS!",
    //     };
    //     stompClient.send("/app/chat", {}, JSON.stringify(message));
    // }

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
                    <Button onClick={sendMessage} variant="contained">Войти</Button>
                </div>
                Ещё не зарегистрированы? <NavLink to="registration">Регистрация</NavLink>

            </div>

        </div>
    );
};

export default HomeScreen;