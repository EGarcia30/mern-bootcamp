import { BasicResponse, GoodbyeResponse } from "../types";


export interface IHelloController{
    getMessage(name?: string): Promise<BasicResponse>
}

export interface IGoodByeController{
    getMessage(name?: string) :Promise<GoodbyeResponse>
}