'use strict'

import Controller from '../../../system/Controller';
import UserService from '../service/UserService';

class UserDetailsController extends Controller {
  constructor() {
    super();
  }

  getUserDetails() {
    return async function (req, res) {
      const user = await UserService.getUserById(req.params.userId);
      res.send(user);
    };
  };
}

export default UserDetailsController;