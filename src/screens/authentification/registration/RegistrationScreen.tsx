import React, {useState} from 'react';
import RegistrationComponent from "./components/RegistrationComponent";
import {User} from "../../../types/UserTypes";
import {getEmptyUser} from "../../../utils/UserUtils";


const RegistrationScreen = () => {

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

    const registration = (): boolean => {
        return true;
    }

    return (
        <RegistrationComponent
            setName={setName}
            setSurname={setSurname}
            setPatronymic={setPatronymic}
            setSpeciality={setSpeciality}
            setJobTitle={setJobTitle}
            setAreaOfScientificInterests={setAreaOfScientificInterests}
            setAcademicTitle={setAcademicTitle}
            setAcademicDegree={setAcademicDegree}
            setLinksToQualifyingPapers={setLinksToQualifyingPapers}
            setLinksToPublications={setLinksToPublications}
            setRole={setRole}
            registration={registration}
        />
    );
};

export default RegistrationScreen;