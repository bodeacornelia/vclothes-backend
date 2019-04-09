import * as bcrypt from 'bcrypt';
import { UserService } from '../../modules/user/UserService';
import { TokenService } from './TokenService';

class Service {

  authenticateByAccessToken(token, callback) {
    TokenService.verifyJWTToken(token).then(function (response: any) {
      let user = UserService.getUserById(response.data.id).then(() => callback(null, user));
    }).catch((err) => callback(err));
  }

  async authenticateByCredentials(email, password, callback) {
    let user = await UserService.getUserByEmail({ email });

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        callback(err);
      }

      if (!result) {
        callback(null, false);
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