/**
 * Root Router
 * Redirections to Routers
 */
import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import goodRouter from "./GoodByeRouter";
import { LogInfo } from "../utils/logger";

//Server instance
let server = express();

//Router instance
let rootRouter = express.Router();

//Activate for request to http://localhost:8000/api

// GET: httt://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: httt://localhost:8000/api/');
    //send Hello world
    res.send('Welcome to my API Restful: Expres + TS + Nodemon + Jest + Swagger + Mongoose');
});

//Redirections to Roouters $ Controllers
server.use('/', rootRouter);
server.use('/hello', helloRouter);
server.use('/goodBye', goodRouter);
//add more routes to the APP


// TODO: on server's file this variable is rootRouter.
export default server;