import express, { Request, Response } from "express";
import { GoodByeController } from "../controller/GoodByeController";
import { LogInfo } from "../utils/logger";

//Router from Express
let goodRouter = express.Router();

//http://localhost:8000/api/goodBye?name=erick/
goodRouter.route('/')
    //GET:
    .get(async(req: Request, res: Response) => {
        //Define variable, this is argument.
        let name: any = req?.query?.name;
        let localDate: any = req?.query?.date;
        LogInfo(`Query Params: ${name} " & " ${localDate}`);
        //instance GoodByeController
        const controller: GoodByeController = new GoodByeController();
        //obtain response
        const response = await controller.getMessage(name);
        //send to the client response
        return res.send(response);
    })

export default goodRouter;