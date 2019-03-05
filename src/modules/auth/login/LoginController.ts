'use strict'
import Controller from '../../../system/Controller';

class LoginController extends Controller {
  constructor() {
    super();
  }

  login() {
    return function (req, res, next) {
      return res.status(200).json(req.user);
    }
  };
}

export default LoginController;