import React, {useContext, useEffect, useState} from 'react';
import './homeScreen.css';
import {Button, TextField} from "@mui/material";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import axios from "axios";
import {User} from "../../types/UserTypes";
import {Context} from "../../index";
import {observer} from "mobx-react";
import LeftBar from "../../components/leftBar/LeftBar";
import CardsScreen from "../cards/CardsScreen";
import ChatsScreen from "../chats/ChatsScreen";
import ProfileScreen from "../profile/ProfileScreen";

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

    const {rootStore} = useContext(Context);


    return (
        <>
            {(!rootStore.authStore.isAuth) && <Navigate to='/login'/>}
            <div style={{display: "flex", width: '100%'}}>
                <LeftBar/>
                <main style={{flex: '1 1 33%'}}>
                    <Routes>
                        <Route path='/profile' element={<ProfileScreen/>}/>
                        <Route path='/cards' element={<CardsScreen/>}/>
                        <Route path='/chats' element={<ChatsScreen/>}/>
                    </Routes>
                </main>
            </div>
        </>

    );
};

export default observer(HomeScreen);