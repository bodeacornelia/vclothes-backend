'use strict'
import { Strategy as LocalStrategy } from 'passport-local';
import UserIdentityServiceProvider from '../../userIdentity/UserIdentityServiceProvider';

export default LocalStrategyProvider;

function LocalStrategyProvider() {
  const userIdentityService = UserIdentityServiceProvider();

  return new LocalStrategy(function (username, password, done) {
    userIdentityService.authenticateByCredentials(username, password, (err, result) => {
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
