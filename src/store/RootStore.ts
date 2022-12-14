import AuthStore from "./AuthStore";
import NotificationStore from "./NotificationStore";
import ApplicationStore from "./ApplicationStore";

export default class RootStore {
    authStore: AuthStore;
    notificationStore: NotificationStore;

    applicationStore: ApplicationStore;

    constructor() {
        this.authStore = new AuthStore(this);
        this.notificationStore = new NotificationStore(this);
        this.applicationStore = new ApplicationStore(this);
    }
}
