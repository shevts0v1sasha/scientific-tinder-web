import React from 'react';
import {NavLink} from "react-router-dom";

const RegistrationSuccessComponent = () => {
    return (
        <div>
            <h3>Регистрация прошла успешно!</h3>
            <NavLink to='/'>На главную</NavLink>
        </div>
    );
};

export default RegistrationSuccessComponent;