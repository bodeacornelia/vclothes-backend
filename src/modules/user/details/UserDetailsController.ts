'use strict'

import Controller from '../../../system/Controller';
import getConnection from '../../../../MysqlConnection';
import Users from '../../../entity/Users';

class UserDetailsController extends Controller {
  constructor() {
    super();
  }

  getUserDetails() {
    return function (req, res) {
      const conn = getConnection();
      conn.then(async connection => {
        let usersRepository = connection.getRepository(Users);
        const user = await usersRepository.findOne(req.params.userId);
        res.send(user);
      }).catch(error => res.send(error))
    };
  }
}

export default UserDetailsController;