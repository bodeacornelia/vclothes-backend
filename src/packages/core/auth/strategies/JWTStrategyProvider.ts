import { Strategy as JWTStrategy, ExtractJwt as ExtractJWT } from 'passport-jwt';
import { config } from '../../../../config';
import { UserService } from '../../../../modules/user/UserService';
import { XErrorUnautorized } from '../../../../system/xerrors/XErrorUnautorized';

export function JWTStrategyProvider() {
  return new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET
  }, function (token, done) {
    return UserService.getUserById(token.data.id)
      .then((user) => {
        return done(null, user);
      }).catch((err) => {
        const error = new XErrorUnautorized('Unauthorized');
        return done(error);
      });
  });
}