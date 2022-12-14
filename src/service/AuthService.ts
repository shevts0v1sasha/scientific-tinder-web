import axios, {AxiosResponse} from "axios";
import {User} from "../types/UserTypes";
import {api} from "../constants/Constants";

export default class AuthService {

    static async login(username: string, password: string): Promise<AxiosResponse<User>> {
        return await axios.post<User>(api + '/auth/login', {"username": username, "password": password});
    }

    static async getUserInfo(userId: number): Promise<AxiosResponse<User>> {
        return await axios.get<User>(api + `/users/info/${userId}`);
    }

}