import express from "express";
import {Request, Response} from 'express';

const app = express();
const port = 3003;

// define a route handler for the default home page
app.get( "/", ( req: Request, res: Response ) => {
    console.log('/ hit')
    res.send( "Hello world!" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );