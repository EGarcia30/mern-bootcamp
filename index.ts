import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

// Configuration the .env file
dotenv.config();

// Creater express APP
const app: Express = express();
const port = process.env.PORT || 8000;

// Define the first route of APP
app.get('/', (req: Request, res: Response) => {
    // Send hello world
    res.send('Welcome to API Restful: Express + TS + Swagger + Mongoose')
});

// Define the second route of APP
app.get('/hello/:name', (req: Request, res: Response) => {
    let userName: string = req.params.name;
    const messageExtra = {
        data:{
            message: `hola, ${userName}`
        }
    }
    res.json(messageExtra).status(200);
});

// Define the third route of APP
app.get('/json', (req: Request, res: Response) => {
    const messageJson = {
        data:{
            message: "Goodbye, world"
        }
    };
    res.status(200).json(messageJson);
});

// Execute APP and Listen Requests port
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
})