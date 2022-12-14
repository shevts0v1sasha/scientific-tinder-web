import {makeAutoObservable} from "mobx";

import RootStore from "./RootStore";
import {User} from "../types/UserTypes";
import AuthService from "../service/AuthService";

export default class AuthStore {

    private rootStore: RootStore;
    user: User | null = null;
    isAuth = false;

    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
        this.restoreUserFromLocalStorage();
    }

    setUser(user: User) {
        this.user = user;
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    async login(username: string, password: string): Promise<boolean> {
        const response = await AuthService.login(username, password);
        if (response.status === 200) {
            localStorage.setItem("userId", String(response.data.id));
            this.setUser(response.data);
            this.setAuth(true);
            return true;
        }
        return false;
    }

    logout() {
        localStorage.clear();
        this.setAuth(false);
        this.setUser({} as User);
    }


    async restoreUserFromLocalStorage() {
        console.log('restore');
        let userId: string | null = localStorage.getItem('userId');
        let res = false;
        if (userId !== null) {
            console.log('restore user with id ' + userId);
            res = await this.fetchUserInfo(parseInt(userId));

        }
        this.setAuth(res);
    }

    async fetchUserInfo(userId: number): Promise<boolean> {
        const responseUserInfo = await AuthService.getUserInfo(userId);
        if (responseUserInfo.status === 200) {
            this.setUser(responseUserInfo.data);
            return true;
        }
        return false;
    }


}