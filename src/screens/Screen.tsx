import React from 'react';
import Header from "../components/header/Header";
import {Routes, Route, useNavigate} from 'react-router-dom';
import HomeScreen from "./home/HomeScreen";
import RegistrationScreen from "./authentification/registration/RegistrationScreen";

const Screen = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<HomeScreen/>}/>
                <Route path='/registration' element={<RegistrationScreen/>}/>
            </Routes>
        </div>
    );
};

export default Screen;