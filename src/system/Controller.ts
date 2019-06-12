import * as passport from 'passport';
import { XErrorUnautorized } from './xerrors/XErrorUnautorized';

class Controller {
  localAuthenticate(req, res, next) {
    return passport.authenticate('local', { session: false })(req, res, next);
  }

  authenticate(req, res, next) {
    return passport.authenticate('jwt', { session: false }, (notFoundUserErr, info, err) => {
      if (err || notFoundUserErr) {
        const error = new XErrorUnautorized('Unauthorized');
        next(error);
      }
      req.user = info;
      next();
    })(req, res, next);
  }

  facebookAuthenticate(req, res, next) {
    return passport.authenticate('facebook')(req, res, next);
  }

  facebookCallbackAuthenticate(req, res, next) {
    return passport.authenticate('facebook', { failureRedirect: '/login' })(req, res, next);
  }
}

export default Controller;