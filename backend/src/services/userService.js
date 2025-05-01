const User = require('../models/User')(require('../config'));

class UserService {
  static async createUser(name, email, password) {
    try {
      const user = await User.create({ name, email, password });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async findUserByEmail(email) {
    try {
      const user = await User.findOne({ where: { email } });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;