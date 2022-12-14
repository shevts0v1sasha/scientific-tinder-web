import {Notification} from "../types/ServiceTypes";
import axios, {AxiosResponse} from "axios";
import {api} from "../constants/Constants";

export default class NotificationService {

    static async fetch(userId: number): Promise<AxiosResponse<Notification[]>> {
        return await axios.get<Notification[]>(api + `/notifications?userId=${userId}`)
    }

    // static setShown(id: number) {
    //
    // }
}
