import * as bcrypt from 'bcrypt';
import Controller from '../../system/Controller';
import { UserService } from '../user/UserService';
import { isEmpty } from 'lodash';
import { XErrorMissingFields } from '../../system/xerrors/XErrorMissingFields';
import { ROLE } from '../../constants/AppConstants';

export class AuthController extends Controller {
  constructor() {
    super();
  }

  createUser(req, res, next) {
    var newUser = req.body;
    newUser.roleId = ROLE.USER;
    if (isEmpty(newUser)) {
      const error = new XErrorMissingFields('User details required');
      next(error);
    } else {

      bcrypt.hash(newUser.password, 10, async function (err, hash) {
        if (err) {
          next(err);
        }
        newUser.password = hash
        await UserService.createUser(newUser);
        const users = await UserService.getAllUsers();
        return res.json(users);
      });
    }
  }

  login(req, res) {
    console.log('Sunt aici ');
    return res.json(req.user);
  };
}