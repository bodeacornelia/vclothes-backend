'use strict'

import { createConnection } from 'typeorm';
import * as bcrypt from 'bcrypt';
import Controller from '../../../system/Controller';
import Users from "../../../entity/Users";
import getConnection from '../../../../MysqlConnection';


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
            console.log(conn);
            const user = new Users();
            user.phone = newUser.phone;
            user.password = newUser.password;
            user.first_name = newUser.first_name;
            user.last_name = newUser.last_name;
            user.email = newUser.email;
            user.role_id = newUser.role_id;
            let usersRepository = connection.getRepository(Users);
            await usersRepository.save(user);
            const allUsers = await usersRepository.find();
            res.json(allUsers);
          })
            // let usersRepository = connection.getRepository(Users);
            // await usersRepository.save(user);

            // createConnection().then(async connection => {
            //   const user = new Users();
            //   user.phone = newUser.phone;
            //   user.password = newUser.password;
            //   user.first_name = newUser.first_name;
            //   user.last_name = newUser.last_name;
            //   user.email = newUser.email;
            //   user.role_id = newUser.role_id;
            //   let usersRepository = connection.getRepository(Users);
            //   await usersRepository.save(user);
            //   const allUsers = await usersRepository.find();
            //   res.json(allUsers);
            // })
            .catch(error => console.log(error));
        };
      });
    }
  }
}

export default RegisterController;