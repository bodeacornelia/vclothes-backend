import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import modules from '../src/modules';
import { connection } from '../MysqlConnection';

const app = express();
dotenv.config();

const port = process.env.BACKEND_PORT

// mysql ORM connection
connection();

app.use(cors());

app.listen(port);
console.log('VSecret RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

modules(app);

