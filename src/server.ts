import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import modules from './modules';
import { connection } from './MysqlConnection';
import { config } from './config';
import * as passport from 'passport';
import LocalStrategyProvider from './packages/core/auth/strategies/LocalStrategyProvider';
import { JWTStrategyProvider } from './packages/core/auth/strategies/JWTStrategyProvider';
import { FacebookStrategyProvider } from './packages/core/auth/strategies/FacebookStrategyProvider';

const app = express();
const port = config.BACKEND_PORT;

// mysql ORM connection
connection();

app.use(cors({
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
}));
passport.use('local', LocalStrategyProvider());
passport.use('jwt', JWTStrategyProvider());
passport.use('facebook', FacebookStrategyProvider());

app.listen(port);
console.log('VSecret RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

modules(app);

// send error in json format
app.use(function (err, req, res, next) {
  res.status(err.status).json(err);
})

