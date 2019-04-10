import { UserService } from './UserService';
import Controller from '../../system/Controller';

export class UserController extends Controller {
  constructor() {
    super();
  }

  async getUserDetails(req, res, next) {
    const user = await UserService.getUserById(req.params.userId);
    res.response = user;
    next();
  };

  async listAllUsers(req, res, next) {
    const userList = await UserService.getAllUsers();
    res.response = userList;
    next();
  }
}
