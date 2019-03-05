import * as passport from 'passport';

class Controller {
  localAuthenticate() {
    return function (req, res, next) {
      return passport.authenticate('local', { session: false })(req, res, next);
    }
  }

  authenticate() {
    return function (req, res, next) {
      return passport.authenticate('bearer', { session: false })(req, res, next);
    }
  }
}

export default Controller;