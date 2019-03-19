'use strict'

import * as bcrypt from 'bcrypt';
import Controller from '../../../system/Controller';
import Users from "../../../entity/Users";
import getConnection from '../../../../MysqlConnection';
import Role from '../../../entity/Role';


class RegisterController extends Controller {
  constructor() {
    super();
  }

  createUser() {
    return function (req, res) {
      var newUser = req.body;

      bcrypt.hash(newUser.password, 10, function (err, hash) {
        if (!newUser) {
          res.status(400).send({
            error: true, message: 'Please provide user'
          });
        }
        else {
          newUser.password = hash
          const conn = getConnection();
          conn.then(async connection => {
            let roleRepository = connection.getRepository(Role);
            let adminRole = await roleRepository.findOne({ name: 'admin' });

            const user = new Users();
            user.phone = newUser.phone;
            user.password = newUser.password;
            user.first_name = newUser.first_name;
            user.last_name = newUser.last_name;
            user.email = newUser.email;
            user.role = adminRole;

            let userRepository = connection.getRepository(Users);
            await userRepository.save(user);

            const allUsers = await userRepository.find();
            res.json(allUsers);
          }).catch(error => console.log(error));
        };
      });
    }
  }
}

export default RegisterController;