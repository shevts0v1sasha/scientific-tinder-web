import React, {FC, useEffect, useState} from 'react';
import {Chat} from "../../../types/ChatTypes";
import {User} from "../../../types/UserTypes";
import {rootStore} from "../../../index";
import axios from "axios";
import {api} from "../../../constants/Constants";


interface IChatPreviewProps {
    chat: Chat;
}


const ChatPreviewComponent: FC<IChatPreviewProps> = ({chat}) => {



    const [participant, setParticipant] = useState<User | null>(null);
    const userId = rootStore.authStore.user?.id;

    useEffect(() => {
        if (userId !== undefined) {
            const participantArray: number[] = chat.participants.filter(value => value !== userId);
            if (participantArray.length === 1) {
                axios.get<User>(api + `/users/info/${participantArray[0]}`)
                    .then(response => {
                        if (response.status === 200) {
                            setParticipant(response.data);
                        }
                    })
            }
        }
    }, [userId]);

    return (
        <div>
            {participant !== null && <div style={{backgroundColor: 'white'}}>Чат с пользоваталем {participant.userInfo.name}</div>}
        </div>
    );
};

export default ChatPreviewComponent;