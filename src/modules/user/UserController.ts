import { UserService } from "./UserService";
import Controller from "../../system/Controller";

export class UserController extends Controller {
  constructor() {
    super();
  }

  async getUserDetails(req, res) {
    const user = await UserService.getUserById(req.params.userId);
    res.json(user);
  };

  async listAllUsers(req, res) {
    const userList = await UserService.getAllUsers();
    res.json(userList);
  }
}
