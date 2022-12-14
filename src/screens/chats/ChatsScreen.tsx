import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Chat} from "../../types/ChatTypes";
import {api} from "../../constants/Constants";
import {rootStore} from "../../index";
import ChatComponent from "./components/ChatComponent";
import {ApplicationPage} from "../../types/ApplicationTypes";

const ChatsScreen = () => {

    const userId = rootStore.authStore.user?.id;
    const [chats, setChats] = useState<Chat[]>([]);

    const [openedChat, setOpenedChat] = useState<Chat | null>(null);

    rootStore.applicationStore.setApplicationPage(ApplicationPage.CHATS);

    useEffect(() => {
        if (userId !== undefined) {
            axios.get<Chat[]>(api + `/chats?participantId=${userId}`)
                .then(response => {
                    console.log(response.data);
                    setChats(response.data);
                });
        }

    }, [userId]);

    return (
        <div style={{width: '100%'}}>
            {openedChat !== null && <ChatComponent chat={openedChat}/>}
            { openedChat === null &&
                chats.map(chat => <ChatComponent chat={chat}/>)
            }
        </div>
    );
};

export default ChatsScreen;