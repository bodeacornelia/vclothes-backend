import { Strategy as LocalStrategy } from 'passport-local';
import { AuthService } from '../../../../modules/auth/AuthService';

export default LocalStrategyProvider;

function LocalStrategyProvider() {

  return new LocalStrategy(function (username, password, done) {
    AuthService.authenticateByCredentials(username, password, (err, result) => {
      if (err) {
        return done(err);
      }
      if (!result) {
        return done(null, false);
      }

      return done(null, result);
    })
  })
}
