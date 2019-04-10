import { Strategy as JWTStrategy, ExtractJwt as ExtractJWT } from 'passport-jwt';
import { config } from '../../../../../config';
import { UserService } from '../../../../modules/user/UserService';
import { XErrorUnautorized } from '../../../../system/xerrors/XErrorUnautorized';

export function JWTStrategyProvider() {
  return new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET
  }, function (token, done) {
    return UserService.getUserById(token.id)
      .then((user) => done(null, user))
      .catch((err) => {
        const error = new XErrorUnautorized('Unauthorized');
        return done(error);
      });
  });
}