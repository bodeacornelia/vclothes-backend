import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import modules from '../src/modules';
import { connection } from '../MysqlConnection';
connection();

const app = express();
dotenv.config();

const port = process.env.BACKEND_PORT
const clientUrl = `${process.env.FRONTEND_PROTOCOL}${process.env.FRONTEND_HOSTNAME}:${process.env.FRONTEND_PORT}`

app.use(cors({
  origin: clientUrl,
  optionsSuccessStatus: 200,
}));

app.listen(port);
console.log('VSecret RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

modules(app);