'use strict'
import Auth from './Auth';
import BearerStrategyProvider from './strategies/BearerStrategyProvider';
import LocalStrategyProvider from './strategies/LocalStrategyProvider';

let instance;

export default AuthProvider;

function AuthProvider() {
  if (!instance) {
    instance = new Auth();
    instance.registerStrategy('bearer', BearerStrategyProvider());
    instance.registerStrategy('local', LocalStrategyProvider());
  }

  return instance;
}