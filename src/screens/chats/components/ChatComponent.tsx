import React, {FC, useEffect, useState} from 'react';
import {Chat} from "../../../types/ChatTypes";
import {User} from "../../../types/UserTypes";
import {api} from "../../../constants/Constants";
import {rootStore} from "../../../index";
import axios from "axios";

interface IChatComponent {
    chat: Chat;
}



const ChatComponent: FC<IChatComponent> = ({chat}) => {

   return(<div>as</div>);
};

export default ChatComponent;