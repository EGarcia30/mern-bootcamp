import express, { Request, Response } from 'express';
import { HelloController } from '../controller/HelloController';
import { LogInfo } from '../utils/logger';

//Router from Express
let helloRouter = express.Router();

//http://localhost:8000/api/hello?name=erick/
helloRouter.route('/')
    //GET:
    .get(async(req: Request, res: Response) => {
        //obtain query params
        let name: any = req?.query?.name;
        LogInfo(`Query Param: ${name}`);
        //Controller instance to execute method
        const controller: HelloController = new HelloController();
        //Obtain response
        const response = await controller.getMessage(name);

        //Send to the client the response
        return res.send(response);
    })

//Export Hello Router
export default helloRouter;