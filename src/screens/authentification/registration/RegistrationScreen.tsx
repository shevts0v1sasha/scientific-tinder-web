import React, {useState} from 'react';
import RegistrationComponent from "./components/RegistrationComponent";
import axios from "axios";
import {RegistrationResponseDto} from "../../../types/AuthTypes";
import {Route, Routes, useNavigate} from "react-router-dom";
import RegistrationSuccessComponent from "./components/RegistrationSuccessComponent";



const RegistrationScreen = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [patronymic, setPatronymic] = useState<string>('');
    const [speciality, setSpeciality] = useState<string>('');
    const [jobTitle, setJobTitle] = useState<string>('');
    const [areaOfScientificInterests, setAreaOfScientificInterests] = useState<string>('');
    const [academicTitle, setAcademicTitle] = useState<string>('');
    const [academicDegree, setAcademicDegree] = useState<string>('');
    const [linksToQualifyingPapers, setLinksToQualifyingPapers] = useState<string>('');
    const [linksToPublications, setLinksToPublications] = useState<string>('');
    const [role, setRole] = useState<string>('');

    const [attempted, setAttempted] = useState<boolean>(false);

    const registration = (errorHappened: boolean): void => {
        setAttempted(true);
        if (!errorHappened) {
            axios.post<RegistrationResponseDto>('http://localhost:8080/api/v1/auth/registration', {username: username,
                password: password, name: name, surname: surname, patronymic: patronymic,
                speciality: speciality, jobTitle: jobTitle, areaOfScientificInterests: areaOfScientificInterests,
                academicTitle: academicTitle, academicDegree: academicDegree, linksToQualifyingPapers: linksToQualifyingPapers,
                linksToPublications: linksToPublications, role: role})
                .then(answer => {
                    console.log(answer);
                    if (answer.status === 201) {
                        navigate('success');
                    }
                });
        }
    }

    return (
        <Routes>
            <Route path='' element={<RegistrationComponent
                params={[
                    {title: "Логин", onChange: setUsername, errorMessage: attempted && username.length === 0 ? 'Обязательно к заполнению' : null, shouldBeHidden: false},
                    {title: "Пароль", onChange: setPassword, errorMessage: attempted && password.length === 0 ? 'Обязательно к заполнению' : null, shouldBeHidden: true},
                    {title: "Имя", onChange: setName, errorMessage: attempted && name.length === 0 ? 'Обязательно к заполнению' : null, shouldBeHidden: false},
                    {title: "Фамилия", onChange: setSurname, errorMessage: attempted && surname.length === 0 ? 'Обязательно к заполнению' : null, shouldBeHidden: false},
                    {title: "Отчество", onChange: setPatronymic, errorMessage: attempted && patronymic.length === 0 ? 'Обязательно к заполнению' : null, shouldBeHidden: false},
                    {title: "Специальность", onChange: setSpeciality, errorMessage: attempted && speciality.length === 0 ? 'Обязательно к заполнению' : null, shouldBeHidden: false},
                    {title: "Должность", onChange: setJobTitle, errorMessage: attempted && jobTitle.length === 0 ? 'Обязательно к заполнению' : null, shouldBeHidden: false},
                    {title: "Область научных интересов", onChange: setAreaOfScientificInterests, errorMessage: attempted && areaOfScientificInterests.length === 0 ? 'Обязательно к заполнению' : null, shouldBeHidden: false},
                    {title: "Ученое звание", onChange: setAcademicTitle, errorMessage: attempted && academicTitle.length === 0 ? 'Обязательно к заполнению' : null, shouldBeHidden: false},
                    {title: "Учёная степень", onChange: setAcademicDegree, errorMessage: attempted && academicDegree.length === 0 ? 'Обязательно к заполнению' : null, shouldBeHidden: false},
                    {title: "Ссылки на квалификационные работы", onChange: setLinksToQualifyingPapers, errorMessage: attempted && linksToQualifyingPapers.length === 0 ? 'Обязательно к заполнению' : null, shouldBeHidden: false},
                    {title: "Ссылки на публикации(При наличии)", onChange: setLinksToPublications, errorMessage: null, shouldBeHidden: false},
                    {title: "Роль (временно)", onChange: setRole, errorMessage: attempted && role.length === 0 ? 'Обязательно к заполнению' : null, shouldBeHidden: false}
                ]}
                registration={registration}
            />}/>
            <Route path='/success' element={<RegistrationSuccessComponent/>}/>
        </Routes>

    );
};

export default RegistrationScreen;