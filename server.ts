import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import modules from './src/modules';
import { connection } from './MysqlConnection';
import { config } from './config';
import * as passport from 'passport';
import BearerStrategyProvider from './src/packages/core/auth/strategies/BearerStrategyProvider';
import LocalStrategyProvider from './src/packages/core/auth/strategies/LocalStrategyProvider';

const app = express();
const port = config.BACKEND_PORT;

// mysql ORM connection
connection();

app.use(cors());
passport.use('local', LocalStrategyProvider());
passport.use('bearer', BearerStrategyProvider());

app.listen(port);
console.log('VSecret RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

modules(app);

