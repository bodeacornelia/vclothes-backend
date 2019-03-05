'use strict'
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import UserIdentityServiceProvider from '../../userIdentity/UserIdentityServiceProvider';

export default  BearerStrategyProvider;

function BearerStrategyProvider() {
  const userIdentityService = UserIdentityServiceProvider();

  return new BearerStrategy(function (token, done) {
    userIdentityService.authenticateByAccessToken(token, (err, result) => {
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
