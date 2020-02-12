import express from 'express';
import {json} from 'express';
import {Routes} from "./Routes";

const app = express();

app.use(json()); //bodyParser

new Routes(app).setRoutes();

app.listen(3000);
// app.listen(3000, () => { console.log('Listening!') });