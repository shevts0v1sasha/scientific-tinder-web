import React, {useContext} from 'react';
import './header.css';
import {observer} from "mobx-react";
import {Context} from "../../index";
import {Avatar, Badge, Typography} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useNavigate} from "react-router-dom";


const headerLabelStyle: Object = {
    fontSize: "28px"
}


const Header = () => {

    const navigate = useNavigate();
    const {rootStore} = useContext(Context);

    const logout = async () => {
        rootStore.authStore.logout();
        navigate('/login');
    }

    return (
        <header>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <span style={headerLabelStyle}>Научный тиндер</span>

                {rootStore.authStore.isAuth &&
                    <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                        <Typography>
                            {rootStore.authStore.user?.userInfo.name}
                            &nbsp;
                            {rootStore.authStore.user?.userInfo.surname}
                        </Typography>
                        <Avatar alt='User Name' src={`${rootStore.authStore.user?.userInfo.previewAvatarPath}`}/>
                        <Badge style={{cursor: "pointer"}} color="primary">
                            <NotificationsIcon/>
                        </Badge>
                        <Badge onClick={logout} style={{cursor: "pointer"}} color="primary">
                            <LogoutIcon/>
                        </Badge>
                    </div>
                }
            </div>

        </header>
    );
};

export default observer(Header);