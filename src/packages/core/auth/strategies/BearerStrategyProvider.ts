import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { AuthService } from '../../../../modules/auth/AuthService';

export default BearerStrategyProvider;

function BearerStrategyProvider() {

  return new BearerStrategy(function (token, done) {
    AuthService.authenticateByAccessToken(token, (err, result) => {
      if (err) {
        return done(null, false, { message: 'Unauthorized.' });
      }

      if (!result) {
        return done(null, false, { message: 'Unauthorized.' });
      }

      done(null, result);
    });
  });
}
