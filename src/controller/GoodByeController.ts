import { GoodbyeResponse } from "./types";
import { IGoodByeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";
import { getDefaultSettings } from "http2";

export class GoodByeController implements IGoodByeController{

    public async getMessage(name?: string): Promise<GoodbyeResponse>{
        LogSuccess('[/api/goodBye/] GET Request');
        let day: number = new Date().getDate();
        let month: number = new Date().getMonth();
        let year: number = new Date().getFullYear();
        return{
            message: `GoodBye, ${name || "anonimous"}`,
            date: new Date(year, month, day)
        }
    }
} 