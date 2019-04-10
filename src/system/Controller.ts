import * as passport from 'passport';
import { XErrorUnautorized } from './xerrors/XErrorUnautorized';

class Controller {
  localAuthenticate(req, res, next) {
    return passport.authenticate('local', { session: false })(req, res, next);
  }

  authenticate(req, res, next) {
    return passport.authenticate('jwt', { session: false }, (req, res, err) => {
      if (err) {
        const error = new XErrorUnautorized('Unauthorized');
        next(error);
      }
      next();
    })(req, res, next);
  }

  reply(req, res, next) {
    const response = res.response;
    res.json(response);
  }
}

export default Controller;