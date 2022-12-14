import React, {FC, useState} from 'react';
import {Button, TextField} from "@mui/material";
import '../registrationScreen.css';
import {NavLink} from "react-router-dom";
import {FormStringParam} from "../../../../types/ServiceTypes";

interface IRegistrationComponentProps {
    params: FormStringParam[];
    registration: (errorHappened: boolean) => void;
}

const RegistrationComponent: FC<IRegistrationComponentProps> = ({params, registration}) => {

    const errorHappened: boolean = params.findIndex(param => param.errorMessage !== null) > -1;
    console.log('errorHappened: ' + errorHappened);

    const handleRegistrationButtonClicked = (): void => {
        registration(errorHappened);
    }

    return (
        <div id="registration-container">
            <div className="registration-center-block">
                <h2>Регистрация</h2>
                <div className="registration-table">
                    <table>
                        {
                            params.map(param => <tr>
                                <td>{param.title}</td>
                                <td>
                                    <TextField
                                        onChange={(evt) => param.onChange(evt.target.value)}
                                        type={param.shouldBeHidden ? "password" : "text"}
                                        error={param.errorMessage !== null}
                                        helperText={param.errorMessage !== null ? param.errorMessage : ''}
                                        id="outlined-basic"
                                        label={param.title}
                                        variant="outlined"/>
                                </td>
                            </tr>)
                        }
                    </table>
                </div>
                <div className="registration-buttons-bar">
                    <div>
                        <NavLink to="/">Вернуться</NavLink>
                    </div>
                    <Button onClick={handleRegistrationButtonClicked} variant="contained">Зарегистрироваться</Button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationComponent;