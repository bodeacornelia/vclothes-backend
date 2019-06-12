import { Strategy as FacebookStrategy } from 'passport-facebook';
import { config } from '../../../../config';

export function FacebookStrategyProvider() {
  return new FacebookStrategy({
    clientID: config.FACEBOOK_APP_ID,
    clientSecret: config.FACEBOOK_APP_SECRET,
    callbackURL: config.FACEBOOK_CALLBACK
  }, function (accessToken, refreshToken, profile, done) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    return done(null, null, profile);
  });
}