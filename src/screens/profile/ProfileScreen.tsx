import React from 'react';
import {rootStore} from "../../index";
import {ApplicationPage} from "../../types/ApplicationTypes";

const ProfileScreen = () => {

    rootStore.applicationStore.setApplicationPage(ApplicationPage.PROFILE);

    return (
        <div style={{backgroundColor: 'white'}}>
            profile
        </div>
    );
};

export default ProfileScreen;