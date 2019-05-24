import { UserService } from './UserService';
import Controller from '../../system/Controller';

export class UserController extends Controller {
  constructor() {
    super();
  }

  async getUserDetails(req, res) {
    return res.json(await UserService.getUserById(req.params.userId));
  };

  async listAllUsers(req, res) {
    const userList = await UserService.getAllUsers();
    return res.json(userList);
  }
}
