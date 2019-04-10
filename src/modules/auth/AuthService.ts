import * as bcrypt from 'bcrypt';
import { UserService } from '../../modules/user/UserService';
import { TokenService } from './TokenService';
import { XErrorUnautorized } from '../../system/xerrors/XErrorUnautorized';

class Service {
  async authenticateByCredentials(email, password, callback) {
    let user = await UserService.getUserByEmail({ email });

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        callback(err);
      }
      const error = new XErrorUnautorized('Wrong username or password');
      if (!result) {
        callback(error);
      }

      callback(null, {
        success: 'true',
        token: TokenService.createJWToken({
          sessionData: user,
          maxAge: 3600
        })
      })
    });
  }
}

const AuthService = new Service();
Object.freeze(AuthService);

export { AuthService };