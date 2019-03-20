'use strict'

import * as bcrypt from 'bcrypt';
import Controller from '../../../system/Controller';
import UserService from '../../user/service/UserService';


class RegisterController extends Controller {
  constructor() {
    super();
  }

  createUser() {
    return function (req, res) {
      var newUser = req.body;

      bcrypt.hash(newUser.password, 10, async function (err, hash) {
        if (!newUser) {
          res.status(400).send({
            error: true, message: 'Please provide user'
          });
        }
        else {
          newUser.password = hash
          await UserService.createUser(newUser);
          const users = await UserService.getAllUsers();
          res.json(users);
        };
      });
    }
  }
}

export default RegisterController;