import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import modules from './src/modules';
import { connection } from './MysqlConnection';
import { config } from './config';
import * as passport from 'passport';
import LocalStrategyProvider from './src/packages/core/auth/strategies/LocalStrategyProvider';
import { JWTStrategyProvider } from './src/packages/core/auth/strategies/JWTStrategyProvider';

const app = express();
const port = config.BACKEND_PORT;

// mysql ORM connection
connection();

app.use(cors());
passport.use('local', LocalStrategyProvider());
passport.use('jwt', JWTStrategyProvider());

app.listen(port);
console.log('VSecret RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

modules(app);

// send error in json format
app.use(function (err, req, res, next) {
  res.status(err.status).json(err);
})

