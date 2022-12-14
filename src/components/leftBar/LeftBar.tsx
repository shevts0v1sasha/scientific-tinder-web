import React from 'react';
import LeftBarButton from "./components/LeftBarButton";

import './leftBar.css';
import {observer} from "mobx-react";
import {rootStore} from "../../index";
import {ApplicationPage} from "../../types/ApplicationTypes";

const LeftBar = () => {

    const appStore = rootStore.applicationStore;

    return (
        <div className='leftBar'>
            <LeftBarButton text='Профиль' selected={appStore.applicationPage === ApplicationPage.PROFILE} navigateTo='profile'/>
            <LeftBarButton text='Главная' selected={appStore.applicationPage === ApplicationPage.CARDS} navigateTo='/cards'/>
            <LeftBarButton text='Чаты' selected={appStore.applicationPage === ApplicationPage.CHATS} navigateTo='/chats'/>
        </div>
    );
};

export default observer(LeftBar);