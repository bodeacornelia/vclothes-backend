import * as bcrypt from 'bcrypt';
import { UserService } from '../../modules/user/UserService';
import { TokenService } from './TokenService';
import { XErrorUnautorized } from '../../system/xerrors/XErrorUnautorized';

class Service {
  async authenticateByCredentials(email, password, callback) {
    const error = new XErrorUnautorized('Wrong username or password');
    UserService.getUserByEmail({ email }).then((user) => {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          callback(error);
        }
        if (!result) {
          callback(error);
        }
        callback(null, {
          success: 'true',
          token: TokenService.createJWToken({
            sessionData: user,
            maxAge: 3600
          }),
        })
      });
    }).catch((err) => {
      callback(error);
    });
  }
}

const AuthService = new Service();
Object.freeze(AuthService);

export { AuthService };