'use strict'

import Controller from '../../../system/Controller';
import getConnection from '../../../../MysqlConnection';
import Users from '../../../entity/Users';

class ListUsersController extends Controller {
  constructor() {
    super();
  }

  listAllUsers() {
    return function (req, res) {
      const conn = getConnection();
      conn.then(async connection => {
        let usersRepository = connection.getRepository(Users);
        const allUsers = await usersRepository.find();
        res.send(allUsers);
      }).catch(error => res.send(error))
    };
  }
}

export default ListUsersController;