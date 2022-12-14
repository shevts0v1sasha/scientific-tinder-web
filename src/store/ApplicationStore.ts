import RootStore from "./RootStore";
import {makeAutoObservable, runInAction} from "mobx";
import {ApplicationPage} from "../types/ApplicationTypes";

export default class ApplicationStore {

    private rootStore: RootStore;

    applicationPage: ApplicationPage = ApplicationPage.CHATS;
    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    setApplicationPage(page: ApplicationPage) {
        runInAction(() => {
            this.applicationPage = page;
        });
    }
}