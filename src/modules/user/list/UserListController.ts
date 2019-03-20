'use strict'

import Controller from '../../../system/Controller';
import UserService from '../service/UserService';

class UserListController extends Controller {
  constructor() {
    super();
  }

  listAllUsers() {
    return async function (req, res) {
      const userList = await UserService.getAllUsers();
      res.send(userList);
    };
  }
}

export default UserListController;