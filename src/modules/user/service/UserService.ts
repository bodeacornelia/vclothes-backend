import { getRepository } from "typeorm";
import { Role, User } from "../../../entity";

class UserService {
  async createUser(newUser) {
    let roleRepository = getRepository(Role);
    let role = await roleRepository.findOne(newUser.roleId);

    const user = new User();
    user.phone = newUser.phone;
    user.password = newUser.password;
    user.first_name = newUser.first_name;
    user.last_name = newUser.last_name;
    user.email = newUser.email;
    user.role = role;

    let userRepository = getRepository(User);
    await userRepository.save(user);
  }

  async getAllUsers() {
    let userRepository = getRepository(User);
    const users = await userRepository.find();
    return users;
  }

  async getUserById(id) {
    let userRepository = getRepository(User);
    const user = await userRepository.findOne(id);
    return user;
  }

  async getUserByEmail(email) {
    let userRepository = getRepository(User);
    const user = await userRepository.findOne(email);
    return user;
  }
}

export default new UserService();