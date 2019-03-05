'use stric'

import * as passport from 'passport';

class Auth {
  passport: any;
  
  constructor() {
    this.passport = passport;
  }

  registerStrategy(namespace, strategy) {
    this.passport.use(namespace, strategy);
  }
}

export default Auth;