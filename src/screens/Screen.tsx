import React, {useEffect, useState} from 'react';
import Header from "../components/header/Header";
import {Routes, Route, useNavigate} from 'react-router-dom';
import HomeScreen from "./home/HomeScreen";
import RegistrationScreen from "./authentification/registration/RegistrationScreen";
import Error404Screen from "./error404/Error404Screen";
import LoginScreen from "./authentification/login/LoginScreen";
import {Alert, AlertTitle} from "@mui/material";
import {rootStore} from "../index";
import {observer} from "mobx-react";
import {Notification} from "../types/ServiceTypes";
import NotificationWrapper from "../components/notifications/NotificationWrapper";

//@ts-ignore
var stompClient = null;
const Screen = () => {

    const userId = rootStore.authStore.user?.id;
    const [notification, setNotification] = useState<boolean>(false);

    console.log('user id in screen: ' + userId);

    const connect = () => {
        const Stomp = require("stompjs");
        var SockJS = require("sockjs-client");
        SockJS = new SockJS("http://localhost:8080/ws");
        stompClient = Stomp.over(SockJS);
        stompClient.connect({}, onConnected, onError);
    };


    const onMessageReceived = (msg: any) => {
        const notification: Notification = JSON.parse(msg.body);
        console.log(msg.body);
        rootStore.notificationStore.setCurrentNotification(notification);
        notificationShow();
    };

    function notificationShow() {
        setNotification(true);
        setTimeout(() => setNotification(false), 6000);
    }


    const onError = (err: any) => {
        console.log("ERROR");
        console.log(err);
    };


    const onConnected = () => {
        //@ts-ignore
        stompClient.subscribe(`/user/` + `${userId}` + `/notifications`, onMessageReceived);
    };


    useEffect(() => {
        console.log('USE EFFECT?');
        if (userId !== undefined) {
            console.log('trying to connect');
            connect();
            // rootStore.notificationStore.fetchNotification(userId);
        }
    }, [userId]);


    return (
        <>
            <Header/>
            <Routes>
                <Route path='/*' element={<HomeScreen/>}/>
                <Route path='/login/*' element={<LoginScreen/>}/>
                <Route path='/registration/*' element={<RegistrationScreen/>}/>
                <Route path='*' element={<Error404Screen/>}/>
            </Routes>
            {notification && <NotificationWrapper />}
        </>
    );
};

export default observer(Screen);