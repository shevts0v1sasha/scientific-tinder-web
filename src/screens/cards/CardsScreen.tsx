import React, {useEffect, useState} from 'react';
import {User} from "../../types/UserTypes";
import axios from "axios";
import {api} from "../../constants/Constants";
import Card from "./components/Card";
import {rootStore} from "../../index";
import {ApplicationPage} from "../../types/ApplicationTypes";

const CardsScreen = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [currentUserIndex, setCurrentUserIndex] = useState<number>(0);
    const [empty, setEmpty] = useState<boolean>(true);

    rootStore.applicationStore.setApplicationPage(ApplicationPage.CARDS);

    const action = (matchedUserId: number, like: boolean) => {
        if (rootStore.authStore.user !== null) {
            if (like) {
                axios.put(api + `/matches?userId=${rootStore.authStore.user.id}&matchedUser=${matchedUserId}`, ).then(response => {});
            }
            console.log(like);
            if (currentUserIndex + 1 < users.length) {
                setCurrentUserIndex(prevState => prevState + 1);
            } else {
                setEmpty(true);
            }
        }
    }

    const reload = () => {
        setCurrentUserIndex(0);
        setEmpty(false);
    }

    const fetchUsers = async () => {
        if (rootStore.authStore.user !== null) {
            axios.get<User[]>(api + '/matches', {params: {
                    id: rootStore.authStore.user.id
                }})
                .then(response => {
                    console.log(response.data);
                    if (response.data.length > 0) {
                        setUsers(response.data);
                        setCurrentUserIndex(0);
                        console.log('set empty false');
                        setEmpty(false);
                    }
                });
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
            <Card user={users[currentUserIndex]} action={action} empty={empty} reload={reload}/>
        </div>
    );
};

export default CardsScreen;