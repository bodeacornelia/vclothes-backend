import { Role, User } from '../../entity';

class Service {
  async createUser(newUser) {
    const role = await Role.findOne(newUser.roleId);

    const user = new User();
    Object.assign(user, newUser);
    user.role = role;
    await User.save(user);
  }

  async getAllUsers() {
    return User.find();
  }

  async getUserById(id) {
    return User.findOneOrFail(id);
  }

  async getUserByEmail(email) {
    return User.findOneOrFail(email);
  }
}

const UserService = new Service()
Object.freeze(UserService)

export { UserService }