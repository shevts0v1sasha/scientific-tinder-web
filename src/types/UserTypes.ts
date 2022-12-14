export type User = {
    id: number;
    username: string;
    password: string;
    userInfo: UserInfo;
    role: Role;
}

export type UserInfo = {
    name: string;
    surname: string;
    patronymic: string;
    speciality: string;
    jobTitle: string;
    areaOfScientificInterests: string;
    academicTitle: string;
    academicDegree: string;
    linksToQualifyingPapers: string;
    linksToPublications: string;
    avatarPath: string;
    previewAvatarPath: string;
}

export enum Role {
    STUDENT,
    SCIENTIST,
    ACADEMIC_SUPERVISOR
}