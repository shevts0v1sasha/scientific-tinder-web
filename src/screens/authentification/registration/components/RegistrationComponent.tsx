import React, {FC, useState} from 'react';
import {Button, TextField} from "@mui/material";
import '../registrationScreen.css';
import {NavLink} from "react-router-dom";

interface IRegistrationComponentProps {
    setName: (name: string) => void;
    setSurname: (name: string) => void;
    setPatronymic: (name: string) => void;
    setSpeciality: (name: string) => void;
    setJobTitle: (name: string) => void;
    setAreaOfScientificInterests: (name: string) => void;
    setAcademicTitle: (name: string) => void;
    setAcademicDegree: (name: string) => void;
    setLinksToQualifyingPapers: (name: string) => void;
    setLinksToPublications: (name: string) => void;
    setRole: (name: string) => void;
    registration: () => boolean;
}

const RegistrationComponent: FC<IRegistrationComponentProps> = (props) => {

    const [error, setError] = useState<boolean>(false);

    const handleRegistrationButtonClicked = (): void => {
        const result = props.registration();
        setError(result);
    }

    return (
        <div id="registration-container">
            <div className="registration-center-block">
                <h2>Регистрация</h2>
                <div className="registration-table">
                    <table>
                        <tr>
                            <td>Имя</td>
                            <td><TextField error={error} helperText={error ? 'Error' : ''} id="outlined-basic" label="Имя" variant="outlined"/></td>
                        </tr>
                        <tr>
                            <td>Фамилия</td>
                            <td><TextField id="outlined-basic" label="Фамилия" variant="outlined"/></td>
                        </tr>
                        <tr>
                            <td>Отчество</td>
                            <td><TextField id="outlined-basic" label="Отчество" variant="outlined"/></td>
                        </tr>
                        <tr>
                            <td>Специальность</td>
                            <td><TextField id="outlined-basic" label="Специальность" variant="outlined"/></td>
                        </tr>
                        <tr>
                            <td>Должность</td>
                            <td><TextField id="outlined-basic" label="Должность" variant="outlined"/></td>
                        </tr>
                        <tr>
                            <td>Область научных интересов</td>
                            <td><TextField id="outlined-basic" label="Область научных интересов" variant="outlined"/></td>
                        </tr>
                        <tr>
                            <td>Ученое звание</td>
                            <td><TextField id="outlined-basic" label="Ученое звание" variant="outlined"/></td>
                        </tr>
                        <tr>
                            <td>Учёная степень</td>
                            <td><TextField id="outlined-basic" label="Учёная степень" variant="outlined"/></td>
                        </tr>
                        <tr>
                            <td>Ссылки на квалификационные работы</td>
                            <td><TextField id="outlined-basic" label="Ссылки на квалификационные работы" variant="outlined"/></td>
                        </tr>
                        <tr>
                            <td>Ссылки на публикации(При наличии)</td>
                            <td><TextField id="outlined-basic" label="Ссылки на публикации" variant="outlined"/></td>
                        </tr>
                        <tr>
                            <td>Роль (временно)</td>
                            <td><TextField id="outlined-basic" label="Рольи" variant="outlined"/></td>
                        </tr>
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