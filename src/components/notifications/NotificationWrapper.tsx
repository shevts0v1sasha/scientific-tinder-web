import React, {useContext} from 'react';
import "./notificationWrapper.css"
import {Context} from "../../index";
import {Notification} from "../../types/ServiceTypes";
import {observer} from "mobx-react-lite";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";


const NotificationWrapper = () => {
    const navigate = useNavigate()
    const {rootStore} = useContext(Context);
    const currentNotification: Notification | null = rootStore.notificationStore.currentNotification;

    return (
        <div className={'n-container flex'} onClick={event => navigate('/taskMenu')}>
            {currentNotification !== null &&
                <div className={"notification-item flex"}>
                    <Typography variant='h6'>Новое уведомление</Typography>
                    <Typography>
                        {currentNotification.message}
                    </Typography>
                </div>
            }
        </div>
    );
};

export default observer(NotificationWrapper);
