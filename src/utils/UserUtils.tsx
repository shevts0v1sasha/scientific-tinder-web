import {User} from "../types/UserTypes";

export const getEmptyUser = (): User => {
    const date: number = new Date().getDate();
    return {
        name: '', academicDegree: '', academicTitle: '', jobTitle: '', areaOfScientificInterests: '',
        linksToPublications: '', linksToQualifyingPapers: '', role: '', patronymic: '', surname: '',
        speciality: '', id: date
    };
}