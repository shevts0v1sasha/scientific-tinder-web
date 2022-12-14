import {makeAutoObservable} from "mobx";
import {Notification} from "../types/ServiceTypes";
import RootStore from "./RootStore";
import NotificationService from "../service/NotificationService";
import {AxiosResponse} from "axios";


export default class NotificationStore {

    userNotification: Notification[] = [];
    currentNotification: Notification | null = null;
    private rootStore: RootStore;


    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        const userId = rootStore.authStore.user?.id
        makeAutoObservable(this);
        if (userId) {
            this.fetchNotification(userId);
        }
    }

    setUserNotification(notification: Notification[]) {
        this.userNotification = notification;
    }

    setCurrentNotification(notification: Notification) {
        this.currentNotification = notification;
    }

    fetchNotification(userId: number) {
        const data: Promise<AxiosResponse<Notification[]>> = NotificationService.fetch(userId);
        data.then(answer => {
            if (answer.data.length > 0) {
                this.setUserNotification(answer.data);
            }
        })
    }

}

