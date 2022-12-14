import React, {FC} from 'react';
import {User} from "../../../types/UserTypes";
import CardControlButton from "./CardControlButton";
import ReplayIcon from '@mui/icons-material/Replay';
import {Badge} from "@mui/material";

interface ICardProps {
    user: User;
    action: (matchedUserId: number, like: boolean) => void;
    empty: boolean;
    reload: () => void;
}

const Card: FC<ICardProps> = ({user, action, empty, reload}) => {

    console.log('empty: ' + empty);
    return (
        <div style={{backgroundColor: "#222222", borderRadius: "5px", padding: "20px", color: "white", margin: '50px'}}>
            {empty &&
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px'}}>
                    <h2>Больше пользователей нет</h2>
                    <Badge color="primary" style={{cursor: 'pointer'}} onClick={reload}>
                        <ReplayIcon/>
                    </Badge>
                </div>
                }
            {!empty &&
                <div style={{display: "flex", gap: "20px"}}>
                    <div style={{position: 'relative'}}>
                        <img src={`${user.userInfo.avatarPath}`} width={360} height={570}/>
                        <CardControlButton agree={true} userId={user.id} action={action}/>
                        <CardControlButton agree={false} userId={user.id} action={action}/>
                    </div>
                    <div>
                        <p>
                            Имя: {user.userInfo.surname} &nbsp; {user.userInfo.name} &nbsp; {user.userInfo.patronymic}
                        </p>
                        <p>
                            Специальность: {user.userInfo.speciality}
                        </p>
                        <p>
                            Должность: {user.userInfo.jobTitle}
                        </p>
                        <p>
                            Ученое звание: {user.userInfo.academicTitle}
                        </p>
                        <p>
                            Ученая степень: {user.userInfo.academicDegree}
                        </p>
                        <p>
                            Ссылки на квалификационные работы: <a>{user.userInfo.linksToQualifyingPapers}</a>
                        </p>
                        <p>
                            Ссылки на публикации: <a>{user.userInfo.linksToPublications}</a>
                        </p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Card;