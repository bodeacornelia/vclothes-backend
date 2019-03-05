'use strict'
import { createConnection } from "typeorm";
import { verifyJWTToken, createJWToken } from '../../../../libs/auth';
const bcrypt = require('bcrypt');
import Users from '../../../entity/Users'

class UserIdentityService {

  authenticateByAccessToken(token, callback) {
    verifyJWTToken(token).then(function (response: any) {
      createConnection().then(async connection => {
        let usersRepository = connection.getRepository(Users);
        let user = await usersRepository.findOne(response.data.id);
        callback(null, user)
      }).catch(error => callback(error));
    });
  }

  authenticateByCredentials(email, password, callback) {
    createConnection().then(async connection => {
      let usersRepository = connection.getRepository(Users);
      let user = await usersRepository.findOne({email});
      console.log(user);
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          callback(err);
        }

        if (!result) {
          callback(null, false);
        }

        callback(null, {
          success: 'true',
          token: createJWToken({
            sessionData: user,
            maxAge: 3600
          })
        })
      });
    }).catch(error => callback(error));
  }
}

export default UserIdentityService;